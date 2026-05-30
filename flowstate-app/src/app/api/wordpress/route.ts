import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sites = await prisma.wordpressSite.findMany({ where: { userId: session.user.id } });
  return NextResponse.json(sites);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { siteUrl, username, appPassword } = await req.json();
  if (!siteUrl || !username || !appPassword) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const cleanUrl = siteUrl.replace(/\/$/, "").replace(/\/wp-json.*$/, "");

  // Check REST API is reachable first
  try {
    const pingRes = await fetch(`${cleanUrl}/wp-json/wp/v2`, { signal: AbortSignal.timeout(10000) });
    if (!pingRes.ok) {
      return NextResponse.json({ error: `WordPress REST API not reachable at ${cleanUrl}/wp-json/wp/v2 — make sure your site URL is correct and the REST API is enabled.` }, { status: 400 });
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `Cannot reach ${cleanUrl} — check the URL is correct and the site is online. (${msg})` }, { status: 400 });
  }

  // Now check credentials
  try {
    const token = Buffer.from(`${username}:${appPassword.replace(/\s/g, "")}`).toString("base64");
    const res = await fetch(`${cleanUrl}/wp-json/wp/v2/users/me`, {
      headers: { Authorization: `Basic ${token}` },
      signal: AbortSignal.timeout(10000),
    });

    if (res.status === 401) {
      return NextResponse.json({ error: "Username or Application Password is incorrect. Make sure you generated an Application Password in WordPress → Users → Profile, not your login password." }, { status: 400 });
    }

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json({ error: `WordPress returned ${res.status}: ${body.slice(0, 200)}` }, { status: 400 });
    }

    const wpUser = await res.json();

    // Check for duplicate
    const existing = await prisma.wordpressSite.findFirst({ where: { userId: session.user.id, siteUrl: cleanUrl } });
    if (existing) {
      const updated = await prisma.wordpressSite.update({
        where: { id: existing.id },
        data: { username, appPassword: appPassword.replace(/\s/g, ""), siteName: wpUser.name ?? cleanUrl, isActive: true },
      });
      return NextResponse.json(updated, { status: 200 });
    }

    const site = await prisma.wordpressSite.create({
      data: {
        userId: session.user.id,
        siteUrl: cleanUrl,
        username,
        appPassword: appPassword.replace(/\s/g, ""),
        siteName: wpUser.name ?? cleanUrl,
        isActive: true,
      },
    });

    return NextResponse.json(site, { status: 201 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `Connection failed: ${msg}` }, { status: 500 });
  }
}
