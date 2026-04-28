import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PLANS } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const month = searchParams.get("month");

  const where: Record<string, unknown> = { userId: session.user.id };
  if (status) where.status = status;
  if (month) {
    const date = new Date(month);
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
    where.scheduledAt = { gte: start, lte: end };
  }

  const posts = await prisma.post.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { content, shortContent, platforms, postType, seoTitle, seoDescription, status, scheduledAt } = body;

  if (!content) return NextResponse.json({ error: "Content required" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const isOwner = process.env.OWNER_EMAIL && user.email === process.env.OWNER_EMAIL;
  const plan = (isOwner ? "agency" : user.plan) as keyof typeof PLANS;
  const planData = PLANS[plan] ?? PLANS.free;

  if (status === "scheduled" || status === "published") {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = await prisma.post.count({
      where: {
        userId: user.id,
        status: { in: ["scheduled", "published"] },
        createdAt: { gte: today },
      },
    });
    if (todayCount >= planData.postsPerDay) {
      return NextResponse.json(
        { error: `Daily post limit of ${planData.postsPerDay} reached. Upgrade your plan.` },
        { status: 429 }
      );
    }
  }

  const post = await prisma.post.create({
    data: {
      userId: session.user.id,
      content,
      shortContent,
      platforms: JSON.stringify(platforms ?? []),
      postType: postType ?? "social",
      seoTitle,
      seoDescription,
      status: status ?? "draft",
      scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
