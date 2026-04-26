import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import SettingsClient from "./SettingsClient";

export default async function SettingsPage() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { id: session!.user.id },
    select: { id: true, name: true, email: true, image: true, plan: true },
  });

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Account Settings</h1>
        <p className="text-[#8888aa]">Manage your profile and account preferences.</p>
      </div>
      <SettingsClient user={user!} />
    </div>
  );
}
