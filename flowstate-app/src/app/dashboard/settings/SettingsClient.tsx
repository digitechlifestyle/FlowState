"use client";

import { useState } from "react";

interface User {
  id: string;
  name: string | null;
  email: string;
  plan: string;
}

export default function SettingsClient({ user }: { user: User }) {
  const [name, setName] = useState(user.name ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/user/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Update failed");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Update failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="glass rounded-2xl p-6 border border-white/5">
        <h2 className="text-white font-semibold mb-5">Profile</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-bold">
            {name?.[0]?.toUpperCase() ?? user.email[0].toUpperCase()}
          </div>
          <div>
            <div className="text-white font-medium">{name || "Your Name"}</div>
            <div className="text-[#8888aa] text-sm">{user.email}</div>
            <div className="text-xs text-purple-400 capitalize mt-0.5">{user.plan} plan</div>
          </div>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm text-[#8888aa] mb-2">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50 transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm text-[#8888aa] mb-2">Email</label>
            <input
              value={user.email}
              disabled
              className="w-full bg-white/3 border border-white/5 rounded-xl px-4 py-3 text-[#8888aa] cursor-not-allowed"
            />
            <p className="text-xs text-[#8888aa] mt-1">Email cannot be changed</p>
          </div>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>
          )}
          {saved && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-green-400 text-sm">✓ Profile updated</div>
          )}
          <button
            type="submit"
            disabled={saving}
            className="gradient-bg text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </form>
      </div>

      <div className="glass rounded-2xl p-6 border border-red-500/10">
        <h2 className="text-white font-semibold mb-2">Danger Zone</h2>
        <p className="text-[#8888aa] text-sm mb-4">Once you delete your account, all your data will be permanently removed.</p>
        <button className="text-red-400 border border-red-400/20 hover:border-red-400/40 px-5 py-2 rounded-xl text-sm font-medium transition-all hover:bg-red-400/5">
          Delete account
        </button>
      </div>
    </div>
  );
}
