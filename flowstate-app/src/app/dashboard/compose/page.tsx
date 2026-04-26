"use client";

import { useState } from "react";
import { PLATFORMS } from "@/lib/utils";

type PostType = "social" | "blog" | "seo";
type Tone = "professional" | "casual" | "humorous" | "inspirational" | "educational";

export default function ComposePage() {
  const [topic, setTopic] = useState("");
  const [postType, setPostType] = useState<PostType>("social");
  const [tone, setTone] = useState<Tone>("professional");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [generatedContent, setGeneratedContent] = useState("");
  const [shortContent, setShortContent] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [generating, setGenerating] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [scheduledAt, setScheduledAt] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  async function handleGenerate() {
    if (!topic.trim()) return;
    setGenerating(true);
    setError("");
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, postType, tone, platforms: selectedPlatforms }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setGeneratedContent(data.content);
      setShortContent(data.shortContent ?? "");
      setSeoTitle(data.seoTitle ?? "");
      setSeoDescription(data.seoDescription ?? "");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Generation failed");
    } finally {
      setGenerating(false);
    }
  }

  async function handleSave(status: "draft" | "scheduled") {
    if (!generatedContent) return;
    setScheduling(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: generatedContent,
          shortContent,
          platforms: selectedPlatforms,
          postType,
          seoTitle,
          seoDescription,
          status,
          scheduledAt: status === "scheduled" ? scheduledAt : undefined,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setScheduling(false);
    }
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">AI Content Studio</h1>
        <p className="text-[#8888aa]">Generate high-quality, platform-optimised content in seconds.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left — Config */}
        <div className="space-y-5">
          <div className="glass rounded-2xl p-6 border border-white/5">
            <h2 className="text-white font-semibold mb-4">Content Settings</h2>

            {/* Topic */}
            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Topic / Brief</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50 transition-colors resize-none text-sm"
                placeholder="e.g. 5 reasons why morning routines matter for productivity..."
              />
            </div>

            {/* Post type */}
            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Content Type</label>
              <div className="grid grid-cols-3 gap-2">
                {(["social", "blog", "seo"] as PostType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setPostType(t)}
                    className={`py-2 px-3 rounded-xl text-sm font-medium capitalize transition-all ${
                      postType === t
                        ? "gradient-bg text-white"
                        : "bg-white/5 text-[#8888aa] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {t === "seo" ? "SEO Blog" : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone */}
            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Tone</label>
              <div className="flex flex-wrap gap-2">
                {(["professional", "casual", "humorous", "inspirational", "educational"] as Tone[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium capitalize transition-all ${
                      tone === t
                        ? "gradient-bg text-white"
                        : "bg-white/5 text-[#8888aa] hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-sm text-[#8888aa] mb-2">Publish to</label>
              <div className="grid grid-cols-3 gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => togglePlatform(p.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      selectedPlatforms.includes(p.id)
                        ? "gradient-bg text-white"
                        : "bg-white/5 text-[#8888aa] hover:text-white"
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span className="truncate">{p.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating || !topic.trim()}
            className="w-full gradient-bg text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 pulse-glow"
          >
            {generating ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating...
              </span>
            ) : (
              "✨ Generate with AI"
            )}
          </button>
        </div>

        {/* Right — Output */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 border border-white/5 min-h-[300px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold">Generated Content</h2>
              {generatedContent && (
                <span className="text-xs text-purple-400">{generatedContent.length} chars</span>
              )}
            </div>

            {!generatedContent && !generating && (
              <div className="flex items-center justify-center h-48 text-center">
                <div>
                  <div className="text-4xl mb-3">🤖</div>
                  <p className="text-[#8888aa] text-sm">Your AI-generated content will appear here</p>
                </div>
              </div>
            )}

            {generating && (
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-[#8888aa] text-sm">Writing your content...</p>
                </div>
              </div>
            )}

            {generatedContent && (
              <textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="w-full bg-transparent text-white text-sm leading-relaxed resize-none focus:outline-none"
                rows={12}
              />
            )}
          </div>

          {shortContent && (
            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-[#8888aa] mb-2">Short version (for character-limited platforms)</div>
              <textarea
                value={shortContent}
                onChange={(e) => setShortContent(e.target.value)}
                className="w-full bg-transparent text-white text-sm leading-relaxed resize-none focus:outline-none"
                rows={3}
              />
            </div>
          )}

          {seoTitle && (
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-3">
              <div className="text-xs text-[#8888aa] font-medium uppercase tracking-wider">SEO Data</div>
              <div>
                <div className="text-xs text-[#8888aa] mb-1">Meta Title</div>
                <input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full bg-transparent text-white text-sm focus:outline-none border-b border-white/10 pb-1"
                />
              </div>
              <div>
                <div className="text-xs text-[#8888aa] mb-1">Meta Description</div>
                <textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  className="w-full bg-transparent text-white text-sm resize-none focus:outline-none"
                  rows={2}
                />
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          {generatedContent && (
            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-[#8888aa] mb-3">Schedule (optional)</div>
              <input
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500/50 mb-3"
              />
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSave("draft")}
                  disabled={scheduling}
                  className="py-3 rounded-xl glass border border-white/10 text-white text-sm font-medium hover:border-purple-500/40 transition-all disabled:opacity-50"
                >
                  Save as draft
                </button>
                <button
                  onClick={() => handleSave("scheduled")}
                  disabled={scheduling || !scheduledAt}
                  className="py-3 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {scheduling ? "Saving..." : "Schedule post"}
                </button>
              </div>
              {saved && (
                <p className="text-center text-green-400 text-sm mt-3">✓ Post saved successfully!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
