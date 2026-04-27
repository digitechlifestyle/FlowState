"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PLATFORMS } from "@/lib/utils";

type PostType = "social" | "blog" | "seo";
type Tone = "professional" | "casual" | "humorous" | "inspirational" | "educational";
type ViewMode = "preview" | "edit";

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function readingTime(text: string) {
  return Math.max(1, Math.ceil(wordCount(text) / 200));
}

export default function ComposePage() {
  const [topic, setTopic] = useState("");
  const [postType, setPostType] = useState<PostType>("social");
  const [tone, setTone] = useState<Tone>("professional");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [generatedContent, setGeneratedContent] = useState("");
  const [shortContent, setShortContent] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>([]);
  const [readingTimeStr, setReadingTimeStr] = useState("");
  const [imageSuggestions, setImageSuggestions] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [generating, setGenerating] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [scheduledAt, setScheduledAt] = useState("");
  const [saved, setSaved] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishResults, setPublishResults] = useState<{ platform: string; success: boolean; error?: string }[]>([]);
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
    setGeneratedContent("");
    setImageSuggestions([]);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, postType, tone, platforms: selectedPlatforms }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setGeneratedContent(data.content ?? "");
      setShortContent(data.shortContent ?? "");
      setSeoTitle(data.seoTitle ?? "");
      setSeoDescription(data.seoDescription ?? "");
      setSlug(data.slug ?? "");
      setPrimaryKeyword(data.primaryKeyword ?? "");
      setSecondaryKeywords(data.secondaryKeywords ?? []);
      setReadingTimeStr(data.readingTime ?? `${readingTime(data.content ?? "")} min read`);
      setImageSuggestions(data.imageSuggestions ?? []);
      setViewMode("preview");
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

  async function handlePublishNow() {
    if (!generatedContent || !selectedPlatforms.length) return;
    setPublishing(true);
    setPublishResults([]);
    setError("");
    try {
      // Save post first
      const saveRes = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: generatedContent,
          shortContent,
          platforms: selectedPlatforms,
          postType,
          seoTitle,
          seoDescription,
          status: "published",
        }),
      });
      const post = await saveRes.json();
      if (!saveRes.ok) throw new Error(post.error ?? "Save failed");

      // Publish to platforms
      const pubRes = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id }),
      });
      const pubData = await pubRes.json();
      if (!pubRes.ok) throw new Error(pubData.error ?? "Publish failed");
      setPublishResults(pubData.results ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Publish failed");
    } finally {
      setPublishing(false);
    }
  }

  const wc = wordCount(generatedContent);
  const rt = readingTimeStr || `${readingTime(generatedContent)} min read`;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">AI Content Studio</h1>
        <p className="text-[#8888aa]">Generate high-quality, Google-ready content in seconds.</p>
      </div>

      <div className="grid lg:grid-cols-[380px_1fr] gap-6 items-start">
        {/* Left — Config */}
        <div className="space-y-4 sticky top-6">
          <div className="glass rounded-2xl p-6 border border-white/5">
            <h2 className="text-white font-semibold mb-4">Content Settings</h2>

            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Topic / Brief</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa] focus:outline-none focus:border-purple-500/50 transition-colors resize-none text-sm"
                placeholder="e.g. Why Bitcoin and XRP are so popular in 2024..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Content Type</label>
              <div className="grid grid-cols-3 gap-2">
                {(["social", "blog", "seo"] as PostType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setPostType(t)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      postType === t ? "gradient-bg text-white" : "bg-white/5 text-[#8888aa] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {t === "seo" ? "SEO Blog" : t === "blog" ? "Blog" : "Social"}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs text-[#8888aa]">
                {postType === "seo" && "1,500–2,000 words · Full SEO metadata · Image guidance"}
                {postType === "blog" && "900–1,200 words · Structured · Image placement"}
                {postType === "social" && "Platform-optimised · Hashtags · Short version included"}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-[#8888aa] mb-2">Tone</label>
              <div className="flex flex-wrap gap-2">
                {(["professional", "casual", "humorous", "inspirational", "educational"] as Tone[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium capitalize transition-all ${
                      tone === t ? "gradient-bg text-white" : "bg-white/5 text-[#8888aa] hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#8888aa] mb-2">Publish to</label>
              <div className="grid grid-cols-3 gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => togglePlatform(p.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
                      selectedPlatforms.includes(p.id) ? "gradient-bg text-white" : "bg-white/5 text-[#8888aa] hover:text-white"
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
            className="w-full gradient-bg text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 pulse-glow"
          >
            {generating ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Writing content...
              </span>
            ) : (
              "✨ Generate with AI"
            )}
          </button>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Right — Output */}
        <div className="space-y-4 min-w-0">
          {!generatedContent && !generating && (
            <div className="glass rounded-2xl border border-white/5 flex items-center justify-center" style={{ minHeight: 400 }}>
              <div className="text-center">
                <div className="text-5xl mb-4">✍️</div>
                <p className="text-white font-medium mb-1">Your content will appear here</p>
                <p className="text-[#8888aa] text-sm">Fill in the settings and click Generate</p>
              </div>
            </div>
          )}

          {generating && (
            <div className="glass rounded-2xl border border-white/5 flex items-center justify-center" style={{ minHeight: 400 }}>
              <div className="text-center">
                <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white font-medium mb-1">Writing your content...</p>
                <p className="text-[#8888aa] text-sm">This takes 10–20 seconds for long-form posts</p>
              </div>
            </div>
          )}

          {generatedContent && (
            <>
              {/* Stats bar */}
              <div className="flex items-center gap-4 px-1">
                <span className="text-xs text-[#8888aa]">📝 {wc.toLocaleString()} words</span>
                <span className="text-xs text-[#8888aa]">⏱ {rt}</span>
                {postType === "seo" && primaryKeyword && (
                  <span className="text-xs text-purple-400">🔑 {primaryKeyword}</span>
                )}
                <div className="ml-auto flex gap-2">
                  <button
                    onClick={() => setViewMode("preview")}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all ${viewMode === "preview" ? "gradient-bg text-white" : "bg-white/5 text-[#8888aa] hover:text-white"}`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setViewMode("edit")}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all ${viewMode === "edit" ? "gradient-bg text-white" : "bg-white/5 text-[#8888aa] hover:text-white"}`}
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Content panel */}
              <div className="glass rounded-2xl border border-white/5 overflow-hidden">
                {viewMode === "preview" ? (
                  <div className="p-8 prose-custom max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => <h1 className="text-2xl font-bold text-white mb-4 leading-tight">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xl font-bold text-white mt-8 mb-3 pb-2 border-b border-white/10">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-base font-semibold text-white mt-5 mb-2">{children}</h3>,
                        p: ({ children }) => <p className="text-[#ccccdd] text-sm leading-7 mb-4">{children}</p>,
                        strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                        em: ({ children }) => <em className="text-purple-300">{children}</em>,
                        ul: ({ children }) => <ul className="list-disc list-inside space-y-1.5 mb-4 text-[#ccccdd] text-sm">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside space-y-1.5 mb-4 text-[#ccccdd] text-sm">{children}</ol>,
                        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-purple-500 pl-4 my-4 italic text-[#aaaacc]">{children}</blockquote>
                        ),
                        hr: () => <hr className="border-white/10 my-6" />,
                        code: ({ children }) => (
                          <code className="bg-white/10 text-purple-300 px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
                        ),
                        img: ({ alt }) => (
                          <div className="my-6 rounded-xl border border-dashed border-purple-500/40 bg-purple-500/5 p-4 text-center">
                            <div className="text-2xl mb-2">🖼️</div>
                            <p className="text-purple-300 text-xs font-medium">Suggested image</p>
                            <p className="text-[#8888aa] text-xs mt-1">{alt?.replace("Image: ", "")}</p>
                          </div>
                        ),
                        a: ({ children, href }) => {
                          if (typeof children === "string" && (children.startsWith("LINK:") || children.startsWith("EXTERNAL LINK:"))) {
                            return (
                              <span className="inline-flex items-center gap-1 text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                🔗 {children}
                              </span>
                            );
                          }
                          return <a href={href} className="text-purple-400 underline hover:text-purple-300">{children}</a>;
                        },
                      }}
                    >
                      {generatedContent}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <textarea
                    value={generatedContent}
                    onChange={(e) => setGeneratedContent(e.target.value)}
                    className="w-full bg-transparent text-[#ccccdd] text-sm leading-7 p-8 resize-none focus:outline-none font-mono"
                    style={{ minHeight: 500 }}
                  />
                )}
              </div>

              {/* Image suggestions */}
              {imageSuggestions.length > 0 && (
                <div className="glass rounded-2xl p-5 border border-white/5">
                  <h3 className="text-white font-semibold text-sm mb-3">📸 Image Suggestions</h3>
                  <p className="text-[#8888aa] text-xs mb-3">Search these on Unsplash, Pexels, or create with Midjourney:</p>
                  <div className="space-y-2">
                    {imageSuggestions.map((img, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                        <span className="text-purple-400 text-xs font-bold flex-shrink-0 mt-0.5">#{i + 1}</span>
                        <span className="text-[#ccccdd] text-xs leading-relaxed">{img}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Short version */}
              {shortContent && (
                <div className="glass rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#8888aa] uppercase tracking-wider">Social teaser</span>
                    <span className="text-xs text-purple-400">{shortContent.length} chars</span>
                  </div>
                  <textarea
                    value={shortContent}
                    onChange={(e) => setShortContent(e.target.value)}
                    className="w-full bg-transparent text-white text-sm leading-relaxed resize-none focus:outline-none"
                    rows={3}
                  />
                </div>
              )}

              {/* SEO panel */}
              {(seoTitle || seoDescription || slug || secondaryKeywords.length > 0) && (
                <div className="glass rounded-2xl p-5 border border-purple-500/20 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">SEO Details</span>
                  </div>

                  {/* Google SERP preview */}
                  {(seoTitle || seoDescription) && (
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full gradient-bg" />
                        <span className="text-xs text-gray-500">yourwebsite.com/{slug || "blog-post"}</span>
                      </div>
                      <div className="text-blue-700 text-base font-medium leading-snug mb-1 hover:underline cursor-pointer">
                        {seoTitle || topic}
                      </div>
                      <div className="text-gray-600 text-xs leading-relaxed">
                        {seoDescription || "Meta description will appear here..."}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#8888aa] mb-1.5">Meta Title <span className={`${(seoTitle?.length ?? 0) > 60 ? "text-red-400" : "text-green-400"}`}>({seoTitle?.length ?? 0}/60)</span></label>
                      <input
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8888aa] mb-1.5">URL Slug</label>
                      <input
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8888aa] mb-1.5">Meta Description <span className={`${(seoDescription?.length ?? 0) > 160 ? "text-red-400" : "text-green-400"}`}>({seoDescription?.length ?? 0}/160)</span></label>
                    <textarea
                      value={seoDescription}
                      onChange={(e) => setSeoDescription(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500/50 resize-none"
                      rows={2}
                    />
                  </div>

                  {secondaryKeywords.length > 0 && (
                    <div>
                      <label className="block text-xs text-[#8888aa] mb-2">Target Keywords</label>
                      <div className="flex flex-wrap gap-2">
                        {primaryKeyword && (
                          <span className="text-xs bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2.5 py-1 rounded-full font-medium">
                            ⭐ {primaryKeyword}
                          </span>
                        )}
                        {secondaryKeywords.map((kw) => (
                          <span key={kw} className="text-xs bg-white/5 border border-white/10 text-[#8888aa] px-2.5 py-1 rounded-full">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Publish Now */}
              <div className="glass rounded-2xl p-5 border border-purple-500/20">
                <button
                  onClick={handlePublishNow}
                  disabled={publishing || !generatedContent || !selectedPlatforms.length}
                  className="w-full py-3.5 rounded-xl gradient-bg text-white font-bold text-sm hover:opacity-90 transition-all disabled:opacity-50 mb-3"
                >
                  {publishing ? "Publishing..." : "🚀 Publish Now"}
                </button>
                {!selectedPlatforms.length && (
                  <p className="text-xs text-amber-400/80 text-center">Select at least one platform above</p>
                )}

                {/* Publish results */}
                {publishResults.length > 0 && (
                  <div className="space-y-2 mt-3">
                    {publishResults.map((r) => (
                      <div
                        key={r.platform}
                        className={`flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs ${
                          r.success
                            ? "bg-green-500/10 border border-green-500/20"
                            : "bg-red-500/10 border border-red-500/20"
                        }`}
                      >
                        <span>{r.success ? "✓" : "✗"}</span>
                        <div>
                          <span className={`font-medium capitalize ${r.success ? "text-green-400" : "text-red-400"}`}>
                            {r.platform}
                          </span>
                          {r.error && <p className="text-[#8888aa] mt-0.5">{r.error}</p>}
                          {r.success && <p className="text-green-400/70 mt-0.5">Published successfully</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Save / Schedule */}
              <div className="glass rounded-2xl p-5 border border-white/5">
                <div className="text-xs text-[#8888aa] mb-3">Schedule for later (optional)</div>
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
                    Save draft
                  </button>
                  <button
                    onClick={() => handleSave("scheduled")}
                    disabled={scheduling || !scheduledAt}
                    className="py-3 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                  >
                    {scheduling ? "Saving..." : "Schedule post"}
                  </button>
                </div>
                {saved && <p className="text-center text-green-400 text-sm mt-3">✓ Saved successfully!</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
