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

type FieldDef = {
  key: string;
  label: string;
  placeholder: string;
  type?: string;
  help?: string;
};

type PlatformGuide = {
  fields: FieldDef[];
  steps: string[];
  docsUrl: string;
  note?: string;
};

const GUIDES: Record<string, PlatformGuide> = {
  twitter: {
    fields: [
      { key: "username", label: "X Username", placeholder: "yourusername", help: "Your X handle without the @" },
      { key: "apiKey", label: "API Key", placeholder: "xxxxxxxxxxxxxxxxxxxxxxx", type: "password", help: 'Under "Consumer Keys" section' },
      { key: "apiSecret", label: "API Key Secret", placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", type: "password", help: 'Under "Consumer Keys" section' },
      { key: "accessToken", label: "Access Token", placeholder: "1234567890-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", type: "password", help: 'Under "Authentication Tokens" — click the Generate button first' },
      { key: "accessTokenSecret", label: "Access Token Secret", placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", type: "password", help: "Shown immediately after clicking Generate — copy it before leaving the page" },
    ],
    steps: [
      "Go to developer.twitter.com → your app → Keys and Tokens",
      'Under "Consumer Keys" — copy your API Key and API Key Secret',
      'Scroll down to "Authentication Tokens" — you will see a Generate button next to Access Token and Secret',
      "Click Generate — it shows both tokens immediately. Copy them both now (they won't show again)",
      'Go to App Settings → User authentication settings → set App permissions to "Read and Write"',
    ],
    docsUrl: "https://developer.twitter.com/en/portal/dashboard",
    note: "The Generate button for Access Token is in the same Keys and Tokens page, below Consumer Keys. If you already clicked Generate before, click Regenerate to get new ones.",
  },

  instagram: {
    fields: [
      { key: "username", label: "Instagram Username", placeholder: "yourusername", help: "Your Instagram handle without @" },
      { key: "accessToken", label: "Page Access Token", placeholder: "EAABsbCS...", type: "password", help: "FlowState will automatically find your Instagram Business Account ID" },
    ],
    steps: [
      "Your Instagram must be a Professional account (Business or Creator) — switch in the Instagram app under Settings → Account",
      "Connect it to a Facebook Page: Instagram app → Settings → Account → Linked Accounts → Facebook",
      "Go to developers.facebook.com → Tools → Graph API Explorer",
      'Click "Generate Access Token" — select your Facebook Page from the dropdown',
      'Add these permissions: pages_show_list, instagram_basic, instagram_content_publish, pages_read_engagement',
      "Copy the token and paste it above — FlowState will find your Instagram account automatically",
    ],
    docsUrl: "https://developers.facebook.com/tools/explorer",
    note: "The token must be for the Facebook Page that is linked to your Instagram. If your Instagram is not showing up, make sure it is a Professional account and linked to a Facebook Page.",
  },

  facebook: {
    fields: [
      { key: "pageName", label: "Page Name", placeholder: "My Business Page", help: "The name of your Facebook Page" },
      { key: "pageId", label: "Page ID", placeholder: "123456789012345", help: "Found in Page Settings → Page Transparency" },
      { key: "accessToken", label: "Page Access Token", placeholder: "EAABsbCS...", type: "password", help: "Long-lived Page Access Token from Graph API Explorer" },
    ],
    steps: [
      "Go to developers.facebook.com → Graph API Explorer",
      'Click "Generate Access Token" and select your Page',
      "Grant pages_manage_posts and pages_read_engagement permissions",
      "Use the Token Debugger to extend it to a long-lived token (60 days)",
    ],
    docsUrl: "https://developers.facebook.com/tools/explorer",
    note: "Page tokens expire. Use the Token Debugger to extend yours to 60 days.",
  },

  linkedin: {
    fields: [
      { key: "profileName", label: "Your Name", placeholder: "Jane Smith", help: "Your name as it appears on LinkedIn" },
      { key: "accessToken", label: "Access Token", placeholder: "AQX...", type: "password", help: "OAuth 2.0 token with w_member_social permission" },
    ],
    steps: [
      "Go to linkedin.com/developers → create or open an app",
      'Add the "Share on LinkedIn" product',
      "Use the OAuth 2.0 Token Generator to create a token",
      "Select the w_member_social scope",
    ],
    docsUrl: "https://www.linkedin.com/developers/apps",
    note: "LinkedIn tokens expire after 60 days and will need refreshing.",
  },

  tiktok: {
    fields: [
      { key: "username", label: "TikTok Username", placeholder: "yourusername", help: "Your TikTok handle without @" },
      { key: "accessToken", label: "Access Token", placeholder: "act.abc123...", type: "password", help: "OAuth 2.0 access token from TikTok for Developers" },
    ],
    steps: [
      "Go to developers.tiktok.com → create an app",
      'Apply for the "Content Posting API" product',
      "Complete the OAuth 2.0 flow to get a user access token",
      "Grant user.info.basic and video.publish scopes",
    ],
    docsUrl: "https://developers.tiktok.com",
    note: "TikTok's API requires app approval. Sandbox tokens can be used for testing.",
  },

  youtube: {
    fields: [
      { key: "channelName", label: "Channel Name", placeholder: "My YouTube Channel", help: "Your channel name as shown on YouTube" },
      { key: "channelId", label: "Channel ID", placeholder: "UCxxxxxxxxxxxxxxxxxxxxxxxx", help: "Found in YouTube Studio → Settings → Channel → Advanced settings" },
      { key: "apiKey", label: "API Key", placeholder: "AIzaSy...", type: "password", help: "From Google Cloud Console → APIs & Services → Credentials" },
    ],
    steps: [
      "Go to console.cloud.google.com and create a project",
      "Enable the YouTube Data API v3",
      "Go to Credentials → Create API Key",
      "Your Channel ID is in YouTube Studio → Settings → Channel → Advanced",
    ],
    docsUrl: "https://console.cloud.google.com",
    note: "The YouTube Data API has daily quota limits. Video uploads require OAuth 2.0 (coming soon).",
  },

  bluesky: {
    fields: [
      { key: "handle", label: "Bluesky Handle", placeholder: "yourname.bsky.social", help: "Your full Bluesky handle including .bsky.social" },
      { key: "appPassword", label: "App Password", placeholder: "xxxx-xxxx-xxxx-xxxx", type: "password", help: "Generate one in Settings — not your main account password" },
    ],
    steps: [
      "Open Bluesky → Settings → Privacy and Security",
      'Click "App Passwords" → Add App Password',
      'Name it "FlowState" and click Create',
      "Copy the generated password (format: xxxx-xxxx-xxxx-xxxx)",
    ],
    docsUrl: "https://bsky.app/settings",
    note: "App passwords are safer than your main password — they can be revoked any time from Settings.",
  },

  threads: {
    fields: [
      { key: "username", label: "Threads Username", placeholder: "yourusername", help: "Your Threads handle without @" },
      { key: "accessToken", label: "Access Token", placeholder: "EAABsbCS...", type: "password", help: "From Meta Developer — Threads uses the same API as Instagram" },
      { key: "accountId", label: "Threads User ID", placeholder: "17841234567890", help: "Your Threads user ID from the API" },
    ],
    steps: [
      "Go to developers.facebook.com and open your app",
      'Add the "Threads API" product',
      "Complete the OAuth flow to get a user access token",
      "Your Threads User ID is returned in the token exchange response",
    ],
    docsUrl: "https://developers.facebook.com/docs/threads",
    note: "Threads API is available for approved apps. Apply through Meta's developer portal.",
  },

  pinterest: {
    fields: [
      { key: "username", label: "Pinterest Username", placeholder: "yourusername", help: "Your Pinterest handle" },
      { key: "accessToken", label: "Access Token", placeholder: "pina_ABC123...", type: "password", help: "OAuth 2.0 access token from Pinterest Developer" },
    ],
    steps: [
      "Go to developers.pinterest.com → create an app",
      'Enable "Create and manage pins" scope',
      "Complete the OAuth 2.0 flow",
      "Copy the access token from the response",
    ],
    docsUrl: "https://developers.pinterest.com/apps",
  },

  reddit: {
    fields: [
      { key: "username", label: "Reddit Username", placeholder: "yourusername", help: "Your Reddit username without u/" },
      { key: "clientId", label: "Client ID", placeholder: "xxxxxxxxxxxxxx", type: "password", help: "Under your app on reddit.com/prefs/apps" },
      { key: "clientSecret", label: "Client Secret", placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", type: "password", help: "Shown under the Client ID in your app settings" },
    ],
    steps: [
      "Go to reddit.com/prefs/apps → create another app",
      'Choose "script" as the app type',
      "Copy the Client ID (shown below the app name) and Client Secret",
      "Make sure your Reddit username matches the account you want to post from",
    ],
    docsUrl: "https://www.reddit.com/prefs/apps",
    note: "Reddit requires posts to go to a specific subreddit. You'll choose the subreddit when composing.",
  },
};

export default function PlatformsPage() {
  const [connected, setConnected] = useState<ConnectedPlatform[]>([]);
  const [wpSites, setWpSites] = useState<WordpressSite[]>([]);
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [credentials, setCredentials] = useState<Record<string, string>>({});
  const [connecting, setConnecting] = useState(false);
  const [connectError, setConnectError] = useState("");
  const [showWpForm, setShowWpForm] = useState(false);
  const [wpUrl, setWpUrl] = useState("");
  const [wpUser, setWpUser] = useState("");
  const [wpPass, setWpPass] = useState("");
  const [wpSaving, setWpSaving] = useState(false);
  const [wpError, setWpError] = useState("");

  useEffect(() => {
    fetch("/api/platforms")
      .then((r) => r.json())
      .then((d) => {
        setConnected(d.platforms ?? []);
        setWpSites(d.wordpress ?? []);
      });
  }, []);

  function openConnect(platformId: string) {
    setActivePlatform(platformId);
    setCredentials({});
    setConnectError("");
  }

  function closeConnect() {
    setActivePlatform(null);
    setCredentials({});
    setConnectError("");
  }

  async function handleConnect() {
    if (!activePlatform) return;
    setConnecting(true);
    setConnectError("");
    try {
      const res = await fetch("/api/platforms/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform: activePlatform, credentials }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setConnected((prev) => [...prev.filter((c) => c.platform !== activePlatform), data]);
      closeConnect();
    } catch (e) {
      setConnectError(e instanceof Error ? e.message : "Failed to connect");
    } finally {
      setConnecting(false);
    }
  }

  async function handleDisconnect(id: string, name: string) {
    if (!confirm(`Disconnect ${name}? Your credentials will be removed from FlowState.`)) return;
    await fetch("/api/platforms/disconnect", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setConnected((prev) => prev.filter((c) => c.id !== id));
  }

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

  const getConnected = (id: string) => connected.find((c) => c.platform === id);
  const guide = activePlatform ? GUIDES[activePlatform] : null;
  const activePlatformData = PLATFORMS.find((p) => p.id === activePlatform);
  const allFieldsFilled = guide?.fields.every((f) => credentials[f.key]?.trim()) ?? false;
  const connectedCount = connected.filter((c) => c.isActive).length;

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Connected Platforms</h1>
        <p className="text-[#8888aa]">
          Connect your social accounts and websites to publish content directly from FlowState.
          {connectedCount > 0 && (
            <span className="ml-2 text-green-400 font-medium">{connectedCount} connected</span>
          )}
        </p>
      </div>

      {/* Social platforms */}
      <div className="glass rounded-2xl p-6 border border-white/5 mb-6">
        <h2 className="text-white font-semibold mb-5">Social Media Platforms</h2>
        <div className="space-y-2">
          {PLATFORMS.map((p) => {
            const conn = getConnected(p.id);
            const isOpen = activePlatform === p.id;

            return (
              <div key={p.id}>
                <div className="flex items-center justify-between px-4 py-3.5 bg-white/3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                      style={{ backgroundColor: p.color + "22", border: `1px solid ${p.color}44` }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{p.name}</div>
                      {conn ? (
                        <div className="text-xs text-green-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                          {conn.accountName}
                        </div>
                      ) : (
                        <div className="text-xs text-[#8888aa]">Not connected</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {conn ? (
                      <>
                        <button
                          onClick={() => openConnect(p.id)}
                          className="text-xs text-[#8888aa] hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDisconnect(conn.id, p.name)}
                          className="text-xs text-red-400 hover:text-red-300 transition-colors px-3 py-1.5 rounded-lg border border-red-400/20 hover:border-red-400/40"
                        >
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => isOpen ? closeConnect() : openConnect(p.id)}
                        className="text-xs gradient-bg text-white px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
                      >
                        {isOpen ? "Cancel" : "Connect"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Inline connect form */}
                {isOpen && guide && activePlatformData && (
                  <div className="mt-1 p-5 bg-[#0d0d1a] rounded-xl border border-purple-500/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: activePlatformData.color + "22" }}
                      >
                        {activePlatformData.icon}
                      </div>
                      <h3 className="text-white font-medium">Connect {activePlatformData.name}</h3>
                    </div>

                    {/* Steps */}
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-xs font-medium text-[#8888aa] uppercase tracking-wide">How to get your credentials</p>
                        <a
                          href={guide.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-purple-400 hover:text-purple-300 transition-colors shrink-0 ml-4"
                        >
                          Open portal →
                        </a>
                      </div>
                      <ol className="space-y-1.5">
                        {guide.steps.map((step, i) => (
                          <li key={i} className="flex gap-2.5 text-xs text-[#8888aa]">
                            <span className="text-purple-400 font-medium shrink-0">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                      {guide.note && (
                        <p className="mt-3 text-xs text-amber-400/80 bg-amber-400/5 border border-amber-400/10 rounded-lg px-3 py-2">
                          ℹ {guide.note}
                        </p>
                      )}
                    </div>

                    {/* Fields */}
                    <div className="space-y-3">
                      {guide.fields.map((field) => (
                        <div key={field.key}>
                          <label className="block text-xs text-[#8888aa] mb-1.5 font-medium">
                            {field.label}
                          </label>
                          <input
                            type={field.type ?? "text"}
                            value={credentials[field.key] ?? ""}
                            onChange={(e) => setCredentials((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            placeholder={field.placeholder}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#555577] focus:outline-none focus:border-purple-500/50 font-mono"
                          />
                          {field.help && (
                            <p className="text-xs text-[#666688] mt-1">{field.help}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    {connectError && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                        {connectError}
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={closeConnect}
                        className="flex-1 py-2.5 rounded-xl glass border border-white/10 text-white text-sm hover:border-white/20 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConnect}
                        disabled={connecting || !allFieldsFilled}
                        className="flex-1 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50"
                      >
                        {connecting ? "Saving..." : "Save & connect"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* WordPress */}
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-white font-semibold">WordPress Sites</h2>
            <p className="text-[#8888aa] text-sm mt-0.5">Publish blog posts directly via the WordPress REST API</p>
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
            <div>
              <h3 className="text-white font-medium text-sm mb-1">Connect WordPress Site</h3>
              <p className="text-xs text-[#8888aa]">Uses the WordPress REST API with Application Passwords — no plugin required.</p>
            </div>
            <div className="p-4 bg-[#0d0d1a] rounded-xl border border-white/5">
              <p className="text-xs font-medium text-[#8888aa] uppercase tracking-wide mb-2">How to create an Application Password</p>
              <ol className="space-y-1.5">
                {[
                  "In WordPress: Users → Your Profile",
                  'Scroll to "Application Passwords"',
                  'Enter "FlowState" and click Add New Application Password',
                  "Copy the generated password",
                ].map((step, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#8888aa]">
                    <span className="text-blue-400 font-medium shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">Site URL</label>
              <input value={wpUrl} onChange={(e) => setWpUrl(e.target.value)} placeholder="https://yoursite.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#555577] focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">WordPress Username</label>
              <input value={wpUser} onChange={(e) => setWpUser(e.target.value)} placeholder="admin"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#555577] focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-xs text-[#8888aa] mb-1.5">Application Password</label>
              <input type="password" value={wpPass} onChange={(e) => setWpPass(e.target.value)} placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#555577] focus:outline-none focus:border-purple-500/50 font-mono" />
            </div>
            {wpError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{wpError}</div>
            )}
            <div className="flex gap-3">
              <button onClick={() => setShowWpForm(false)}
                className="flex-1 py-2.5 rounded-xl glass border border-white/10 text-white text-sm hover:border-white/20 transition-all">
                Cancel
              </button>
              <button onClick={connectWordPress} disabled={wpSaving || !wpUrl || !wpUser || !wpPass}
                className="flex-1 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50">
                {wpSaving ? "Connecting..." : "Connect site"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
