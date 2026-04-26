import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const [platforms, wordpress] = await Promise.all([
    prisma.connectedPlatform.findMany({ where: { userId: session.user.id } }),
    prisma.wordpressSite.findMany({ where: { userId: session.user.id } }),
  ]);

  return NextResponse.json({ platforms, wordpress });
}
