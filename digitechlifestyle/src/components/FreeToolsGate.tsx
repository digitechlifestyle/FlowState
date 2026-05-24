'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const tools = [
  {
    emoji: '🎨',
    name: 'ComfyCloud',
    category: 'AI Image Generation',
    description:
      'Generate AI images for free — no install, no setup, runs entirely in the browser. One of the most powerful image tools available without spending a penny.',
    href: 'https://comfycloud.ai',
    cta: 'Access ComfyCloud free',
  },
  {
    emoji: '💬',
    name: 'Z.ai',
    category: 'AI Chat',
    description:
      'Free access to Claude and ChatGPT in one place. Stop switching tabs — run both top AI models side by side without separate subscriptions.',
    href: 'https://z.ai',
    cta: 'Access Z.ai free',
  },
  {
    emoji: '🧠',
    name: 'Qwen AI',
    category: 'AI Reasoning',
    description:
      'A free reasoning model that rivals the paid ones. Built for complex thinking, long-form tasks, and problems that need more than a quick answer.',
    href: 'https://chat.qwenlm.ai',
    cta: 'Access Qwen AI free',
  },
  {
    emoji: '🎬',
    name: 'HunyuanVideo',
    category: 'AI Video Generation',
    description:
      'Create AI-generated videos for free. One of the most capable open video models available — no monthly subscription required.',
    href: 'https://hunyuanvideo.com',
    cta: 'Access HunyuanVideo free',
  },
  {
    emoji: '✂️',
    name: 'Vider AI',
    category: 'AI Video Editing',
    description:
      'Edit videos with AI — trim, caption, cut, and enhance without touching a timeline. Built for creators who want results fast.',
    href: 'https://vider.ai',
    cta: 'Access Vider AI free',
  },
  {
    emoji: '⚔️',
    name: 'Arena AI',
    category: 'AI Comparison',
    description:
      'Compare any AI model side by side for free. Run the same prompt through multiple models and see which performs best for your use case.',
    href: 'https://lmarena.ai',
    cta: 'Access Arena AI free',
  },
];

export function FreeToolsGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Brief delay for UX, then unlock
    setTimeout(() => {
      setLoading(false);
      setUnlocked(true);
    }, 600);
  }

  if (!unlocked) {
    return (
      <div className="surface rounded-xl p-8 max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Free access
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Enter your email to unlock the tools
        </h2>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Free. No spam. I&apos;ll also send you useful tools and tips as I find them.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your first name"
            className="h-11 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[var(--accent)]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="h-11 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[var(--accent)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="h-11 rounded-lg bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-slate-100 disabled:opacity-60"
          >
            {loading ? 'One moment…' : 'Unlock the free tools →'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-[var(--muted)]">
          🎉 <strong className="text-white">You&apos;re in.</strong> Bookmark this page — your tools are below.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {tools.map((tool) => (
          <div key={tool.name} className="surface rounded-lg p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
              {tool.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {tool.emoji} {tool.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {tool.description}
            </p>
            <Link
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
            >
              {tool.cta} <ArrowUpRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
