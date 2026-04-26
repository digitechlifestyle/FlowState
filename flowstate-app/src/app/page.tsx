import Link from "next/link";
import { PLANS } from "@/lib/utils";

const features = [
  {
    icon: "🤖",
    title: "AI Content Generation",
    desc: "Claude AI writes compelling posts, blog articles, and SEO-optimised content in seconds. Short or long-form, your voice.",
  },
  {
    icon: "📅",
    title: "Smart Content Calendar",
    desc: "Drag-and-drop scheduling across all your social channels. See your entire content strategy at a glance.",
  },
  {
    icon: "🌐",
    title: "Multi-Platform Publishing",
    desc: "Post simultaneously to X, Facebook, Instagram, LinkedIn, TikTok, Pinterest — and your WordPress site.",
  },
  {
    icon: "📊",
    title: "Deep Analytics",
    desc: "Track engagement, reach, and growth across every platform. Know exactly what content drives results.",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    desc: "Every blog post is automatically optimised for search engines. Meta tags, keywords, readability — all handled.",
  },
  {
    icon: "🔗",
    title: "WordPress & CMS Integration",
    desc: "Publish blog posts directly to your WordPress site or any REST API-compatible CMS in one click.",
  },
];

const testimonials = [
  {
    quote: "FlowState cut our content creation time by 80%. The AI writes better than our old agency and costs 10x less.",
    author: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    avatar: "SC",
  },
  {
    quote: "Finally a tool that actually understands SEO. Our organic traffic is up 140% since switching to FlowState.",
    author: "Marcus Williams",
    role: "Founder, GrowthLab",
    avatar: "MW",
  },
  {
    quote: "Managing 6 client accounts used to take my whole week. Now it takes half a day. Absolute game changer.",
    author: "Emma Rodriguez",
    role: "Social Media Manager",
    avatar: "ER",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <span className="font-semibold text-lg text-white">FlowState</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#8888aa]">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Reviews</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm text-[#8888aa] hover:text-white transition-colors px-4 py-2">
              Sign in
            </Link>
            <Link href="/auth/register" className="text-sm gradient-bg text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Start free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#8888aa] mb-8 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Powered by Claude AI · Trusted by 10,000+ creators
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Social media on{" "}
            <span className="gradient-text">autopilot</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8888aa] mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-powered content creation, smart scheduling, and cross-platform publishing — all in one premium platform built for brands that mean business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all glow">
              Start for free — no card needed
            </Link>
            <Link href="#features" className="glass text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/10 hover:border-purple-500/40 transition-all">
              See how it works →
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#8888aa]">
            Free plan forever · Pro from $29.99/mo · Cancel anytime
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="glass rounded-2xl border border-white/10 p-6 glow">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {["Scheduled Posts", "Published Today", "AI Credits Left"].map((label, i) => (
                <div key={label} className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <div className="text-[#8888aa] text-xs mb-1">{label}</div>
                  <div className="text-2xl font-bold gradient-text">{["24", "8", "87"][i]}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {["M","T","W","T","F","S","S"].map((day, i) => (
                <div key={`${day}-${i}`} className="bg-white/3 rounded-lg p-2 border border-white/5">
                  <div className="text-[#8888aa] text-xs mb-2">{day}</div>
                  {i < 5 && (
                    <div className="space-y-1">
                      <div className="h-1.5 rounded-full bg-purple-500/60 w-full" />
                      {i % 2 === 0 && <div className="h-1.5 rounded-full bg-cyan-500/60 w-3/4" />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform logos */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm text-[#8888aa] mb-8">Publish to all major platforms</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["𝕏 Twitter", "f Facebook", "📸 Instagram", "in LinkedIn", "🎵 TikTok", "P Pinterest", "🌐 WordPress"].map((p) => (
              <div key={p} className="text-[#8888aa] font-medium text-sm hover:text-white transition-colors cursor-default">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to{" "}
              <span className="gradient-text">dominate</span>
            </h2>
            <p className="text-[#8888aa] text-xl max-w-2xl mx-auto">
              Built by marketers, for marketers. Every feature designed to save time and drive results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6 border border-white/5 card-hover cursor-default">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-[#8888aa] text-xl">Start free. Scale when you&apos;re ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {(Object.entries(PLANS) as [string, typeof PLANS[keyof typeof PLANS]][]).map(([key, plan]) => (
              <div
                key={key}
                className={`rounded-2xl p-8 border relative flex flex-col ${
                  key === "pro"
                    ? "gradient-bg text-white glow md:scale-105 border-transparent"
                    : "glass border-white/10 card-hover"
                }`}
              >
                {key === "pro" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-purple-600 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-1 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    {plan.price > 0 && (
                      <span className={key === "pro" ? "text-purple-200" : "text-[#8888aa]"}>/mo</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span className={key === "pro" ? "text-purple-100" : "text-[#8888aa]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/register"
                  className={`text-center py-3 rounded-xl font-semibold transition-all block ${
                    key === "pro"
                      ? "bg-white text-purple-600 hover:bg-purple-50"
                      : "glass border border-white/10 text-white hover:border-purple-500/40"
                  }`}
                >
                  {plan.price === 0 ? "Start for free" : `Get ${plan.name}`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Loved by <span className="gradient-text">10,000+ creators</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="glass rounded-2xl p-6 border border-white/5 card-hover">
                <div className="flex text-yellow-400 mb-4 text-lg">★★★★★</div>
                <p className="text-[#8888aa] text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.author}</div>
                    <div className="text-[#8888aa] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 border border-purple-500/20 glow">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">grow faster</span>?
            </h2>
            <p className="text-[#8888aa] text-xl mb-8">
              Join thousands of creators and brands using FlowState to scale their social presence.
            </p>
            <Link href="/auth/register" className="inline-block gradient-bg text-white px-10 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
              Start for free today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center text-white font-bold text-xs">F</div>
            <span className="text-white font-medium">FlowState</span>
          </div>
          <div className="flex gap-6 text-sm text-[#8888aa]">
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/auth/login" className="hover:text-white transition-colors">Login</Link>
            <Link href="/auth/register" className="hover:text-white transition-colors">Sign up</Link>
          </div>
          <p className="text-[#8888aa] text-sm">© 2025 FlowState. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
