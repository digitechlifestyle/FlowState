"use client";

import { useState, useEffect } from "react";
import { PLATFORMS } from "@/lib/utils";

interface ConnectedPlatform {
  id: string;
  platform: string;
  accountName: string;
  isActive: boolean;
}

interface WordpressSite {
  id: string;
  siteUrl: string;
  siteName: string | null;
  isActive: boolean;
}

export default function PlatformsPage() {
  const [connected, setConnected] = useState<ConnectedPlatform[]>([]);
  const [wpSites, setWpSites] = useState<WordpressSite[]>([]);
  const [showWpForm, setShowWpForm] = useState(false);
  const [wpUrl, setWpUrl] = useState("");
  const [wpUser, setWpUser] = useState("");
  const [wpPass, setWpPass] = useState("");
  const [wpSaving, setWpSaving] = useState(false);
  const [wpError, setWpError] = useState("");

  useEffect(() => {
    fetch("/api/platforms").then((r) => r.json()).then((d) => {
      setConnected(d.platforms ?? []);
      setWpSites(d.wordpress ?? []);
    });
  }, []);

  async function connectWordPress() {
    setWpSaving(true);
    setWpError("");
    try {
      const res = await fetch("/api/wordpress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteUrl: wpUrl, username: wpUser, appPassword: wpPass }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setWpSites((prev) => [...prev, data]);
      setShowWpForm(false);
      setWpUrl(""); setWpUser(""); setWpPass("");
    } catch (e) {
      setWpError(e instanceof Error ? e.message : "Failed to connect");
    } finally {
      setWpSaving(false);
    }
  }

  const isConnected = (id: string) => connected.some((c) => c.platform === id);

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Connected Platforms</h1>
        <p className="text-[#8888aa]">Connect your social accounts and websites to publish content directly from FlowState.</p>
      </div>

      {/* Social platforms */}
      <div className="glass rounded-2xl p-6 border border-white/5 mb-6">
        <h2 className="text-white font-semibold mb-5">Social Media Platforms</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {PLATFORMS.map((p) => {
            const conn = connected.find((c) => c.platform === p.id);
            return (
              <div key={p.id} className="flex items-center justify-between p-4 bg-white/3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: p.color + "33", border: `1px solid ${p.color}44` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{p.name}</div>
                    {conn ? (
                      <div className="text-xs text-green-400">✓ {conn.accountName}</div>
                    ) : (
                      <div className="text-xs text-[#8888aa]">Not connected</div>
                    )}
                  </div>
                </div>
                {conn ? (
                  <button className="text-xs text-red-400 hover:text-red-300 transition-colors px-3 py-1.5 rounded-lg border border-red-400/20 hover:border-red-400/40">
                    Disconnect
                  </button>
                ) : (
                  <button className="text-xs gradient-bg text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity font-medium">
                    Connect
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <p className="text-blue-300 text-sm">
            <strong>OAuth integration:</strong> Add your social platform API credentials to <code className="bg-white/10 px-1 rounded">.env</code> to enable OAuth connections. Each platform requires a registered app with the respective developer portal.
          </p>
        </div>
      </div>

      {/* WordPress */}
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-white font-semibold">WordPress Sites</h2>
            <p className="text-[#8888aa] text-sm mt-0.5">Publish blog posts directly to your WordPress site</p>
          </div>
          <button
            onClick={() => setShowWpForm(true)}
            className="gradient-bg text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            + Add site
          </button>
        </div>

        {wpSites.length === 0 && !showWpForm && (
          <div className="text-center py-8">
            <div className="text-3xl mb-3">🌐</div>
            <p className="text-[#8888aa] text-sm mb-4">No WordPress sites connected yet</p>
            <button
              onClick={() => setShowWpForm(true)}
              className="gradient-bg text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Connect WordPress site
            </button>
          </div>
        )}

        {wpSites.map((site) => (
          <div key={site.id} className="flex items-center justify-between p-4 bg-white/3 rounded-xl border border-white/5 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-xl">🌐</div>
              <div>
                <div className="text-white text-sm font-medium">{site.siteName ?? site.siteUrl}</div>
                <div className="text-xs text-[#8888aa]">{site.siteUrl}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-green-400">Connected</span>
            </div>
          </div>
        ))}

        {showWpForm && (
          <div className="p-5 bg-white/3 rounded-xl border border-white/10 space-y-4">
            <h3 className="text-white font-medium text-sm">Connect WordPress Site</h3>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">Site URL</label>
              <input
                value={wpUrl}
                onChange={(e) => setWpUrl(e.target.value)}
                placeholder="https://yoursite.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">WordPress Username</label>
              <input
                value={wpUser}
                onChange={(e) => setWpUser(e.target.value)}
                placeholder="admin"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">Application Password</label>
              <input
                type="password"
                value={wpPass}
                onChange={(e) => setWpPass(e.target.value)}
                placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50"
              />
              <p className="text-xs text-[#8888aa] mt-1">
                Generate in WordPress: Users → Profile → Application Passwords
              </p>
            </div>
            {wpError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{wpError}</div>
            )}
            <div className="flex gap-3">
              <button onClick={() => setShowWpForm(false)} className="flex-1 py-2.5 rounded-xl glass border border-white/10 text-white text-sm hover:border-white/20 transition-all">
                Cancel
              </button>
              <button
                onClick={connectWordPress}
                disabled={wpSaving || !wpUrl || !wpUser || !wpPass}
                className="flex-1 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50"
              >
                {wpSaving ? "Connecting..." : "Connect site"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
