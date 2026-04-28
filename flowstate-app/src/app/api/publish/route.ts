import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function buildOAuth1Header(
  method: string,
  url: string,
  apiKey: string,
  apiSecret: string,
  accessToken: string,
  accessTokenSecret: string
): string {
  const nonce = crypto.randomBytes(16).toString("hex");
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params: Record<string, string> = {
    oauth_consumer_key: apiKey,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: timestamp,
    oauth_token: accessToken,
    oauth_version: "1.0",
  };
  const sortedParams = Object.keys(params).sort()
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join("&");
  const baseString = [method.toUpperCase(), encodeURIComponent(url), encodeURIComponent(sortedParams)].join("&");
  const signingKey = `${encodeURIComponent(apiSecret)}&${encodeURIComponent(accessTokenSecret)}`;
  const signature = crypto.createHmac("sha1", signingKey).update(baseString).digest("base64");
  params["oauth_signature"] = signature;
  const header = Object.keys(params).sort()
    .map((k) => `${encodeURIComponent(k)}="${encodeURIComponent(params[k])}"`).join(", ");
  return `OAuth ${header}`;
}

type PlatformResult = {
  platform: string;
  success: boolean;
  externalId?: string;
  error?: string;
};

// ─── Platform publishers ─────────────────────────────────────────────────────

async function publishToTwitter(
  content: string,
  tokenJson: string
): Promise<PlatformResult> {
  try {
    const { apiKey, apiSecret, accessToken, accessTokenSecret } = JSON.parse(tokenJson);
    if (!accessToken || !accessTokenSecret) {
      return { platform: "twitter", success: false, error: "Access Token missing — reconnect X in Platforms and add all 4 credentials including Access Token and Secret" };
    }
    const url = "https://api.twitter.com/2/tweets";
    const authHeader = buildOAuth1Header("POST", url, apiKey, apiSecret, accessToken, accessTokenSecret);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: authHeader },
      body: JSON.stringify({ text: content.slice(0, 280) }),
    });
    const data = await res.json();
    if (!res.ok || data.errors) {
      return { platform: "twitter", success: false, error: data.errors?.[0]?.message ?? data.detail ?? "Tweet failed" };
    }
    return { platform: "twitter", success: true, externalId: data.data?.id };
  } catch (e) {
    return { platform: "twitter", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToBluesky(
  content: string,
  tokenJson: string
): Promise<PlatformResult> {
  try {
    const { handle, appPassword } = JSON.parse(tokenJson);
    const sessionRes = await fetch("https://bsky.social/xrpc/com.atproto.server.createSession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: handle, password: appPassword }),
    });
    if (!sessionRes.ok) return { platform: "bluesky", success: false, error: "Authentication failed" };
    const { accessJwt, did } = await sessionRes.json();

    const postRes = await fetch("https://bsky.social/xrpc/com.atproto.repo.createRecord", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessJwt}` },
      body: JSON.stringify({
        repo: did,
        collection: "app.bsky.feed.post",
        record: { $type: "app.bsky.feed.post", text: content.slice(0, 300), createdAt: new Date().toISOString() },
      }),
    });
    if (!postRes.ok) return { platform: "bluesky", success: false, error: "Failed to post" };
    const data = await postRes.json();
    return { platform: "bluesky", success: true, externalId: data.uri };
  } catch (e) {
    return { platform: "bluesky", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToFacebook(
  content: string,
  tokenJson: string
): Promise<PlatformResult> {
  try {
    const { accessToken, pageId } = JSON.parse(tokenJson);
    const res = await fetch(`https://graph.facebook.com/v20.0/${pageId}/feed`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: content, access_token: accessToken }),
    });
    const data = await res.json();
    if (data.error) return { platform: "facebook", success: false, error: data.error.message };
    return { platform: "facebook", success: true, externalId: data.id };
  } catch (e) {
    return { platform: "facebook", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToInstagram(
  content: string,
  tokenJson: string
): Promise<PlatformResult> {
  try {
    const { accessToken, accountId } = JSON.parse(tokenJson);
    // Instagram requires an image — create a text-overlay container
    const containerRes = await fetch(
      `https://graph.facebook.com/v20.0/${accountId}/media`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caption: content,
          media_type: "REELS",
          access_token: accessToken,
        }),
      }
    );
    const container = await containerRes.json();
    if (container.error) return { platform: "instagram", success: false, error: "Instagram requires an image or video to post. Text-only posts are not supported." };

    const publishRes = await fetch(
      `https://graph.facebook.com/v20.0/${accountId}/media_publish`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creation_id: container.id, access_token: accessToken }),
      }
    );
    const pub = await publishRes.json();
    if (pub.error) return { platform: "instagram", success: false, error: pub.error.message };
    return { platform: "instagram", success: true, externalId: pub.id };
  } catch (e) {
    return { platform: "instagram", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToLinkedIn(
  content: string,
  accessToken: string
): Promise<PlatformResult> {
  try {
    // Get person URN first
    const meRes = await fetch("https://api.linkedin.com/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!meRes.ok) return { platform: "linkedin", success: false, error: "LinkedIn token expired or invalid" };
    const me = await meRes.json();
    const authorUrn = `urn:li:person:${me.id}`;

    const postRes = await fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({
        author: authorUrn,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: { text: content },
            shareMediaCategory: "NONE",
          },
        },
        visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
      }),
    });
    const data = await postRes.json();
    if (data.status && data.status >= 400) return { platform: "linkedin", success: false, error: data.message ?? "LinkedIn posting failed" };
    return { platform: "linkedin", success: true, externalId: data.id };
  } catch (e) {
    return { platform: "linkedin", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToThreads(
  content: string,
  tokenJson: string
): Promise<PlatformResult> {
  try {
    const { accessToken, accountId } = JSON.parse(tokenJson);
    // Step 1: create container
    const containerRes = await fetch(
      `https://graph.threads.net/v1.0/${accountId}/threads`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ media_type: "TEXT", text: content, access_token: accessToken }),
      }
    );
    const container = await containerRes.json();
    if (container.error) return { platform: "threads", success: false, error: container.error.message };

    // Step 2: publish
    const publishRes = await fetch(
      `https://graph.threads.net/v1.0/${accountId}/threads_publish`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creation_id: container.id, access_token: accessToken }),
      }
    );
    const pub = await publishRes.json();
    if (pub.error) return { platform: "threads", success: false, error: pub.error.message };
    return { platform: "threads", success: true, externalId: pub.id };
  } catch (e) {
    return { platform: "threads", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToPinterest(
  content: string,
  accessToken: string
): Promise<PlatformResult> {
  try {
    // Get user boards first
    const boardsRes = await fetch("https://api.pinterest.com/v5/boards?page_size=1", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const boards = await boardsRes.json();
    if (!boards.items?.length) return { platform: "pinterest", success: false, error: "No Pinterest boards found. Create a board first." };

    const boardId = boards.items[0].id;
    const pinRes = await fetch("https://api.pinterest.com/v5/pins", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({
        board_id: boardId,
        description: content.slice(0, 500),
        title: content.slice(0, 100),
      }),
    });
    const pin = await pinRes.json();
    if (pin.code) return { platform: "pinterest", success: false, error: pin.message };
    return { platform: "pinterest", success: true, externalId: pin.id };
  } catch (e) {
    return { platform: "pinterest", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

async function publishToWordPress(
  title: string,
  content: string,
  siteUrl: string,
  username: string,
  appPassword: string
): Promise<PlatformResult> {
  try {
    const token = Buffer.from(`${username}:${appPassword}`).toString("base64");
    const res = await fetch(`${siteUrl}/wp-json/wp/v2/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Basic ${token}` },
      body: JSON.stringify({ title: title || "New Post", content, status: "publish" }),
    });
    const data = await res.json();
    if (!res.ok) return { platform: "wordpress", success: false, error: data.message ?? "WordPress publish failed" };
    return { platform: "wordpress", success: true, externalId: String(data.id) };
  } catch (e) {
    return { platform: "wordpress", success: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

// ─── Main handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { postId } = await req.json();
  if (!postId) return NextResponse.json({ error: "postId required" }, { status: 400 });

  const post = await prisma.post.findUnique({ where: { id: postId, userId: session.user.id } });
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });

  const platforms: string[] = JSON.parse(post.platforms || "[]");
  const results: PlatformResult[] = [];

  // Get all connected platforms for this user
  const connected = await prisma.connectedPlatform.findMany({
    where: { userId: session.user.id, isActive: true },
  });
  const connMap = Object.fromEntries(connected.map((c) => [c.platform, c]));

  // WordPress sites
  const wpSites = await prisma.wordpressSite.findMany({ where: { userId: session.user.id, isActive: true } });

  // Publish to each selected platform
  for (const platform of platforms) {
    const conn = connMap[platform];

    if (platform === "wordpress") {
      if (!wpSites.length) {
        results.push({ platform: "wordpress", success: false, error: "No WordPress site connected" });
        continue;
      }
      for (const site of wpSites) {
        const r = await publishToWordPress(post.seoTitle ?? post.title ?? "New Post", post.content, site.siteUrl, site.username, site.appPassword);
        results.push(r);
      }
      continue;
    }

    if (!conn) {
      results.push({ platform, success: false, error: `${platform} not connected` });
      continue;
    }

    const content = (post.shortContent && post.shortContent.trim()) ? post.shortContent : post.content;

    let result: PlatformResult;
    switch (platform) {
      case "bluesky":    result = await publishToBluesky(content, conn.accessToken); break;
      case "facebook":   result = await publishToFacebook(content, conn.accessToken); break;
      case "instagram":  result = await publishToInstagram(content, conn.accessToken); break;
      case "linkedin":   result = await publishToLinkedIn(content, conn.accessToken); break;
      case "threads":    result = await publishToThreads(content, conn.accessToken); break;
      case "pinterest":  result = await publishToPinterest(content, conn.accessToken); break;
      case "twitter":
        result = await publishToTwitter(content, conn.accessToken);
        break;
      case "youtube":
        result = { platform: "youtube", success: false, error: "YouTube video uploads require OAuth — coming soon" };
        break;
      case "tiktok":
        result = { platform: "tiktok", success: false, error: "TikTok requires video content — coming soon" };
        break;
      case "reddit":
        result = { platform: "reddit", success: false, error: "Reddit posting requires subreddit selection — coming soon" };
        break;
      default:
        result = { platform, success: false, error: "Platform not yet supported" };
    }
    results.push(result);
  }

  // Save results to DB
  await Promise.all(
    results.map((r) =>
      prisma.platformPostResult.create({
        data: {
          postId: post.id,
          platform: r.platform,
          status: r.success ? "published" : "failed",
          externalId: r.externalId ?? null,
          errorMsg: r.error ?? null,
          publishedAt: r.success ? new Date() : null,
        },
      })
    )
  );

  // Update post status
  const anySuccess = results.some((r) => r.success);
  if (anySuccess) {
    await prisma.post.update({
      where: { id: post.id },
      data: { status: "published", publishedAt: new Date() },
    });
  }

  return NextResponse.json({ results, postId: post.id });
}
