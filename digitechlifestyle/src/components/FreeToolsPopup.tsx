"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const STORAGE_KEY = "dtl_tools_unlocked";

const tools = [
  { emoji: "🎨", name: "ComfyCloud",     category: "AI Image Generation", href: "https://comfycloud.ai",      cta: "Access ComfyCloud free",    description: "Generate AI images for free — no install, no setup, runs entirely in the browser." },
  { emoji: "💬", name: "Z.ai",           category: "AI Chat",             href: "https://z.ai",               cta: "Access Z.ai free",          description: "Free access to Claude and ChatGPT in one place — no separate subscriptions." },
  { emoji: "🧠", name: "Qwen AI",        category: "AI Reasoning",        href: "https://chat.qwenlm.ai",     cta: "Access Qwen AI free",       description: "A free reasoning model that rivals the paid ones. Built for complex thinking." },
  { emoji: "🎬", name: "HunyuanVideo",   category: "AI Video Generation", href: "https://hunyuanvideo.com",   cta: "Access HunyuanVideo free",  description: "Create AI-generated videos for free. No monthly subscription required." },
  { emoji: "✂️", name: "Vider AI",       category: "AI Video Editing",    href: "https://vider.ai",           cta: "Access Vider AI free",      description: "Edit videos with AI — trim, caption, cut, and enhance without a timeline." },
  { emoji: "⚔️", name: "Arena AI",       category: "AI Comparison",       href: "https://lmarena.ai",         cta: "Access Arena AI free",      description: "Compare any AI model side by side for free. Run the same prompt, see who wins." },
  { emoji: "🔍", name: "Perplexity AI",  category: "AI Search",           href: "https://www.perplexity.ai",  cta: "Access Perplexity free",    description: "AI-powered search that cites its sources. Free tier covers most everyday research tasks." },
];

const affiliates = [
  { name: "Ledger",      label: "Secure your crypto",       cta: "Shop Ledger →",       url: "https://shop.ledger.com/?referral_code=FN50B8J0VZNVR" },
  { name: "Coinbase UK", label: "FCA-registered exchange",  cta: "Start on Coinbase →", url: "https://coinbase.com/join/digitechlifestyle" },
  { name: "Kraken",      label: "Advanced trading, 0.16%",  cta: "Trade on Kraken →",   url: "https://kraken.app.link/PzxrgWP7Qzb" },
  { name: "Koinly",      label: "HMRC crypto tax reports",  cta: "Try Koinly free →",   url: "https://koinly.io" },
];

export function FreeToolsPopup() {
  const pathname = usePathname();
  const [unlocked, setUnlocked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFreeToolsPage = pathname === "/free-tools" || pathname === "/free-tools/";

  useEffect(() => {
    if (!isFreeToolsPage) return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setUnlocked(true);
      return;
    }
    setVisible(true);
  }, [isFreeToolsPage]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fd.get("email"), name: fd.get("name") }),
      });
    } catch { /* unlock regardless */ }
    sessionStorage.setItem(STORAGE_KEY, "1");
    setLoading(false);
    setVisible(false);
    setUnlocked(true);
  }

  // Only render on /free-tools
  if (!isFreeToolsPage) return null;

  return (
    <>
      {/* Popup gate */}
      {visible && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "grid",
          placeItems: "center",
          background: "oklch(0% 0 0 / 0.80)",
          padding: "20px",
        }}>
          <div style={{
            background: "var(--bg-panel)",
            border: "1px solid oklch(73% 0.17 78 / 0.4)",
            borderRadius: "16px",
            padding: "36px 32px",
            width: "100%",
            maxWidth: "440px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 0, left: "32px", right: "32px",
              height: "2px", background: "var(--amber)", borderRadius: "0 0 2px 2px",
            }} />
            <button
              onClick={() => { sessionStorage.setItem(STORAGE_KEY, "1"); setVisible(false); setUnlocked(true); }}
              aria-label="Close"
              style={{
                position: "absolute", top: "14px", right: "14px",
                background: "none", border: "none", color: "var(--muted)",
                fontSize: "20px", lineHeight: 1, cursor: "pointer", padding: "4px 8px",
              }}
            >✕</button>

            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 14px" }}>
              🔓 Free access
            </p>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", lineHeight: 1.2, margin: "0 0 10px" }}>
              Unlock 7 free AI tools
            </h2>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--muted)", margin: "0 0 24px" }}>
              Enter your email and get instant access. No paid plans, no credit cards. I&apos;ll also send you useful tools and tips as I find them.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
              <input type="text" name="name" placeholder="Your first name (optional)" style={{ height: "44px", borderRadius: "8px", border: "1px solid var(--line)", background: "var(--bg)", padding: "0 14px", fontSize: "14px", color: "var(--fg)", fontFamily: "inherit", outline: "none" }} />
              <input type="email" name="email" required placeholder="your@email.com" style={{ height: "44px", borderRadius: "8px", border: "1px solid var(--line)", background: "var(--bg)", padding: "0 14px", fontSize: "14px", color: "var(--fg)", fontFamily: "inherit", outline: "none" }} />
              <button type="submit" disabled={loading} style={{ height: "46px", borderRadius: "8px", background: "var(--amber)", color: "var(--bg)", border: "none", fontSize: "15px", fontWeight: 700, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, transition: "opacity 0.12s" }}>
                {loading ? "One moment…" : "Unlock free tools →"}
              </button>
            </form>

            <p style={{ fontSize: "11px", color: "var(--muted)", textAlign: "center", margin: "14px 0 0" }}>
              Free forever · No spam · Unsubscribe anytime
            </p>
          </div>
        </div>
      )}

      {/* Unlocked — show tools */}
      {unlocked && (
        <div style={{ marginTop: "0" }}>
          <div style={{ background: "oklch(73% 0.17 78 / 0.10)", border: "1px solid oklch(73% 0.17 78 / 0.30)", borderRadius: "10px", padding: "14px 20px", marginBottom: "24px" }}>
            <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>
              🎉 <strong style={{ color: "var(--fg)" }}>You&apos;re in.</strong> Your tools are below.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {tools.map((tool) => (
              <div key={tool.name} style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px", padding: "20px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--amber)", margin: "0 0 8px" }}>{tool.category}</p>
                <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>{tool.emoji} {tool.name}</h2>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--muted)", margin: "0 0 16px" }}>{tool.description}</p>
                <Link href={tool.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "var(--amber)" }}>
                  {tool.cta} <ArrowUpRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          {/* Affiliate links */}
          <div style={{ marginTop: "40px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
              Recommended by DigiTech
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {affiliates.map((a) => (
                <Link key={a.name} href={a.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "10px", padding: "16px", textDecoration: "none" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: "0 0 4px" }}>{a.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", margin: "0 0 10px" }}>{a.label}</p>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {a.cta} <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
            <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "10px", opacity: 0.6 }}>
              DigiTech may earn a commission on purchases. This never affects our editorial recommendations.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
