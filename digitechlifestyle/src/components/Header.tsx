import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { AdSlot } from "./AdSlot";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/88 backdrop-blur-xl">
      <div className="container">
        <AdSlot label="header" className="my-3 min-h-16" />
        <div className="flex min-h-20 items-center justify-between gap-5">
          <Link href="/" className="min-w-0">
            <span className="block text-xl font-black tracking-tight text-white">{site.name}</span>
            <span className="hidden text-xs text-[var(--muted)] sm:block">Digital Living, Wealth, AI & Automation</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/newsletter" className="hidden rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 sm:inline-flex">
              Join
            </Link>
            <button className="rounded-lg border border-white/10 p-2 text-slate-300" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
