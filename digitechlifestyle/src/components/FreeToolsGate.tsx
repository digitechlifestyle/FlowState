'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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
    } catch {
      // unlock regardless
    }
    setLoading(false);
    setUnlocked(true);
  }

  return (
    <div style={{ position: 'relative' }}>

      {/* Tool cards — always rendered, blurred when locked */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        filter: unlocked ? 'none' : 'blur(6px)',
        pointerEvents: unlocked ? 'auto' : 'none',
        userSelect: unlocked ? 'auto' : 'none',
        transition: 'filter 0.3s',
      }}>
        {tools.map((tool) => (
          <div key={tool.name} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--line)',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              margin: '0 0 8px',
            }}>
              {tool.category}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--fg)', margin: '0 0 10px' }}>
              {tool.emoji} {tool.name}
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 16px' }}>
              {tool.description}
            </p>
            <Link
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--amber)',
              }}
            >
              {tool.cta} <ArrowUpRight size={15} />
            </Link>
          </div>
        ))}
      </div>

      {/* Popup modal overlay — portal to document.body so nothing can trap it */}
      {!unlocked && mounted && createPortal(
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'grid',
          placeItems: 'center',
          background: 'oklch(0% 0 0 / 0.78)',
          padding: '20px',
        }}>
          <div style={{
            background: 'var(--bg-panel)',
            border: '1px solid oklch(73% 0.17 78 / 0.35)',
            borderRadius: '16px',
            padding: '36px 32px',
            width: '100%',
            maxWidth: '440px',
            position: 'relative',
          }}>
            {/* Amber accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '32px',
              right: '32px',
              height: '2px',
              background: 'var(--amber)',
              borderRadius: '0 0 2px 2px',
            }} />

            <p style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              margin: '0 0 14px',
            }}>
              🔓 Free access
            </p>

            <h2 style={{
              fontSize: '22px',
              fontWeight: 800,
              color: 'var(--fg)',
              lineHeight: 1.2,
              margin: '0 0 10px',
            }}>
              Unlock 6 free AI tools
            </h2>

            <p style={{
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'var(--muted)',
              margin: '0 0 24px',
            }}>
              Enter your email and get instant access. No paid plans, no credit cards. I&apos;ll also send you useful tools and tips as I find them.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your first name (optional)"
                style={{
                  height: '44px',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                  background: 'var(--bg)',
                  padding: '0 14px',
                  fontSize: '14px',
                  color: 'var(--fg)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                style={{
                  height: '44px',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                  background: 'var(--bg)',
                  padding: '0 14px',
                  fontSize: '14px',
                  color: 'var(--fg)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  height: '46px',
                  borderRadius: '8px',
                  background: 'var(--amber)',
                  color: 'var(--bg)',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  fontFamily: 'inherit',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  transition: 'opacity 0.12s',
                }}
              >
                {loading ? 'One moment…' : 'Unlock free tools →'}
              </button>
            </form>

            <p style={{
              fontSize: '11px',
              color: 'var(--muted)',
              textAlign: 'center',
              margin: '14px 0 0',
            }}>
              Free forever · No spam · Unsubscribe anytime
            </p>
          </div>
        </div>,
        document.body
      )}

      {/* Success banner */}
      {unlocked && (
        <div style={{
          background: 'oklch(73% 0.17 78 / 0.10)',
          border: '1px solid oklch(73% 0.17 78 / 0.30)',
          borderRadius: '10px',
          padding: '14px 20px',
          marginBottom: '24px',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
            🎉 <strong style={{ color: 'var(--fg)' }}>You&apos;re in.</strong> Bookmark this page — your tools are below.
          </p>
        </div>
      )}
    </div>
  );
}
