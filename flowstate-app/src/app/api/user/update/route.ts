import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = await req.json();
  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { name },
  });

  return NextResponse.json({ id: user.id, name: user.name });
}
