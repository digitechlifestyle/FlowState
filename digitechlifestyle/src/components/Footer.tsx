import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { AdSlot } from "./AdSlot";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10">
        <AdSlot label="footer" className="mb-8" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="text-xl font-black text-white">{site.name}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{site.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {navItems.slice(0, 6).map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">© 2026 {site.name}. Informational content only. Not financial advice.</p>
      </div>
    </footer>
  );
}
