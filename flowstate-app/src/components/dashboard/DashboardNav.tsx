"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "⊡" },
  { href: "/dashboard/compose", label: "Compose", icon: "✏️" },
  { href: "/dashboard/calendar", label: "Calendar", icon: "📅" },
  { href: "/dashboard/analytics", label: "Analytics", icon: "📊" },
  { href: "/dashboard/platforms", label: "Platforms", icon: "🌐" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
  { href: "/dashboard/billing", label: "Billing", icon: "💳" },
];

interface NavProps {
  user: { name?: string | null; email: string; plan: string; image?: string | null };
}

export default function DashboardNav({ user }: NavProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0d0d16] border-r border-white/5 flex flex-col z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
            F
          </div>
          <span className="font-semibold text-white">FlowState</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "gradient-bg text-white"
                  : "text-[#8888aa] hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Plan badge */}
      <div className="px-3 py-3 border-t border-white/5">
        <div className="glass rounded-xl p-3 mb-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8888aa]">Current plan</span>
            <span className="text-xs font-semibold gradient-text uppercase">{user.plan}</span>
          </div>
          {user.plan === "free" && (
            <Link href="/dashboard/billing" className="block text-center text-xs gradient-bg text-white rounded-lg py-1.5 font-medium hover:opacity-90 transition-opacity">
              Upgrade to Pro
            </Link>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-3 px-1">
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {user.name?.[0]?.toUpperCase() ?? user.email[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-xs font-medium truncate">{user.name ?? "User"}</div>
            <div className="text-[#8888aa] text-xs truncate">{user.email}</div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-[#8888aa] hover:text-white transition-colors text-xs"
            title="Sign out"
          >
            ↪
          </button>
        </div>
      </div>
    </aside>
  );
}
