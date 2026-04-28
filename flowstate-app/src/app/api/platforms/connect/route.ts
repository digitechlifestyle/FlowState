import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type SaveResult = { accountName: string; accountId: string; tokenToStore: string };

function saveCredentials(
  platform: string,
  credentials: Record<string, string>
): SaveResult {
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

    case "instagram":
      return {
        accountName: `@${c.username.replace(/^@/, "").trim()}`,
        accountId: c.accountId,
        tokenToStore: JSON.stringify({ accessToken: c.accessToken, accountId: c.accountId }),
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
    const { accountName, accountId, tokenToStore } = saveCredentials(platform, credentials);

    const record = await prisma.connectedPlatform.upsert({
      where: { userId_platform: { userId: session.user.id, platform } },
      create: {
        userId: session.user.id,
        platform,
        accountName,
        accountId,
        accessToken: tokenToStore,
        isActive: true,
      },
      update: {
        accountName,
        accountId,
        accessToken: tokenToStore,
        isActive: true,
      },
    });

    return NextResponse.json(record);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to save credentials";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
