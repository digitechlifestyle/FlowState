import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type SaveResult = { accountName: string; accountId: string; tokenToStore: string };

// Instagram: auto-discover the Business Account ID from the access token
async function resolveInstagram(accessToken: string, username: string): Promise<SaveResult> {
  // Try as a Page Access Token first: GET /me?fields=instagram_business_account,name
  const pageRes = await fetch(
    `https://graph.facebook.com/v20.0/me?fields=instagram_business_account,name,id&access_token=${accessToken}`
  );
  const pageData = await pageRes.json();

  if (pageData.instagram_business_account?.id) {
    return {
      accountName: `@${username.replace(/^@/, "")}`,
      accountId: pageData.instagram_business_account.id,
      tokenToStore: JSON.stringify({ accessToken, accountId: pageData.instagram_business_account.id }),
    };
  }

  // Try as a User Access Token: GET /me/accounts to get pages
  const accountsRes = await fetch(
    `https://graph.facebook.com/v20.0/me/accounts?fields=access_token,name,instagram_business_account&access_token=${accessToken}`
  );
  const accountsData = await accountsRes.json();

  if (accountsData.error) {
    throw new Error(accountsData.error.message ?? "Invalid access token");
  }

  const pages: Array<{ id: string; name: string; access_token: string; instagram_business_account?: { id: string } }> =
    accountsData.data ?? [];

  for (const page of pages) {
    if (page.instagram_business_account?.id) {
      return {
        accountName: `@${username.replace(/^@/, "")}`,
        accountId: page.instagram_business_account.id,
        tokenToStore: JSON.stringify({
          accessToken: page.access_token ?? accessToken,
          accountId: page.instagram_business_account.id,
        }),
      };
    }
  }

  throw new Error(
    "No Instagram Business or Creator account found linked to this token. Make sure your Instagram account is a Professional account connected to a Facebook Page."
  );
}

function saveCredentials(platform: string, credentials: Record<string, string>): SaveResult {
  const c = credentials;

  switch (platform) {
    case "twitter":
      return {
        accountName: `@${c.username.replace(/^@/, "").trim()}`,
        accountId: c.username.replace(/^@/, "").trim(),
        tokenToStore: JSON.stringify({
          apiKey: c.apiKey,
          apiSecret: c.apiSecret,
          accessToken: c.accessToken,
          accessTokenSecret: c.accessTokenSecret,
        }),
      };

    case "facebook":
      return {
        accountName: c.pageName || "Facebook Page",
        accountId: c.pageId,
        tokenToStore: JSON.stringify({ accessToken: c.accessToken, pageId: c.pageId }),
      };

    case "linkedin":
      return {
        accountName: c.profileName || "LinkedIn Profile",
        accountId: c.accessToken.slice(0, 16),
        tokenToStore: c.accessToken,
      };

    case "tiktok":
      return {
        accountName: `@${c.username.replace(/^@/, "").trim()}`,
        accountId: c.username.replace(/^@/, "").trim(),
        tokenToStore: c.accessToken,
      };

    case "pinterest":
      return {
        accountName: `@${c.username.replace(/^@/, "").trim()}`,
        accountId: c.username.replace(/^@/, "").trim(),
        tokenToStore: c.accessToken,
      };

    case "youtube":
      return {
        accountName: c.channelName || "YouTube Channel",
        accountId: c.channelId,
        tokenToStore: JSON.stringify({ apiKey: c.apiKey, channelId: c.channelId }),
      };

    case "bluesky":
      return {
        accountName: c.handle.startsWith("@") ? c.handle : `@${c.handle}`,
        accountId: c.handle.replace(/^@/, "").trim(),
        tokenToStore: JSON.stringify({ handle: c.handle, appPassword: c.appPassword }),
      };

    case "threads":
      return {
        accountName: `@${c.username.replace(/^@/, "").trim()}`,
        accountId: c.accountId,
        tokenToStore: JSON.stringify({ accessToken: c.accessToken, accountId: c.accountId }),
      };

    case "reddit":
      return {
        accountName: `u/${c.username.replace(/^u\//, "").trim()}`,
        accountId: c.username.replace(/^u\//, "").trim(),
        tokenToStore: JSON.stringify({ clientId: c.clientId, clientSecret: c.clientSecret, username: c.username }),
      };

    default:
      throw new Error("Unknown platform");
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { platform, credentials } = await req.json();
  if (!platform || !credentials) {
    return NextResponse.json({ error: "Platform and credentials required" }, { status: 400 });
  }

  try {
    let result: SaveResult;

    if (platform === "instagram") {
      if (!credentials.accessToken) {
        return NextResponse.json({ error: "Access token required" }, { status: 400 });
      }
      result = await resolveInstagram(credentials.accessToken, credentials.username || "instagram");
    } else {
      result = saveCredentials(platform, credentials);
    }

    const record = await prisma.connectedPlatform.upsert({
      where: { userId_platform: { userId: session.user.id, platform } },
      create: {
        userId: session.user.id,
        platform,
        accountName: result.accountName,
        accountId: result.accountId,
        accessToken: result.tokenToStore,
        isActive: true,
      },
      update: {
        accountName: result.accountName,
        accountId: result.accountId,
        accessToken: result.tokenToStore,
        isActive: true,
      },
    });

    return NextResponse.json(record);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to save credentials";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
