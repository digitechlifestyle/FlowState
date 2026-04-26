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

  const cleanUrl = siteUrl.replace(/\/$/, "");

  try {
    const token = Buffer.from(`${username}:${appPassword}`).toString("base64");
    const res = await fetch(`${cleanUrl}/wp-json/wp/v2/users/me`, {
      headers: { Authorization: `Basic ${token}` },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Could not connect to WordPress site. Check your credentials." }, { status: 400 });
    }

    const wpUser = await res.json();

    const site = await prisma.wordpressSite.create({
      data: {
        userId: session.user.id,
        siteUrl: cleanUrl,
        username,
        appPassword,
        siteName: wpUser.name ?? cleanUrl,
        isActive: true,
      },
    });

    return NextResponse.json(site, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to connect. Ensure WordPress REST API is enabled." }, { status: 500 });
  }
}
