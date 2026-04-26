import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AnalyticsPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [totalPosts, scheduledPosts, publishedPosts, draftPosts, platforms] = await Promise.all([
    prisma.post.count({ where: { userId } }),
    prisma.post.count({ where: { userId, status: "scheduled" } }),
    prisma.post.count({ where: { userId, status: "published" } }),
    prisma.post.count({ where: { userId, status: "draft" } }),
    prisma.connectedPlatform.findMany({ where: { userId, isActive: true } }),
  ]);

  const last30 = new Date();
  last30.setDate(last30.getDate() - 30);

  const recentPosts = await prisma.post.findMany({
    where: { userId, createdAt: { gte: last30 } },
    orderBy: { createdAt: "asc" },
  });

  const postsByDay: Record<string, number> = {};
  recentPosts.forEach((p) => {
    const day = p.createdAt.toISOString().split("T")[0];
    postsByDay[day] = (postsByDay[day] ?? 0) + 1;
  });

  const byPlatform: Record<string, number> = {};
  recentPosts.forEach((p) => {
    const pts = JSON.parse(p.platforms || "[]") as string[];
    pts.forEach((pt) => { byPlatform[pt] = (byPlatform[pt] ?? 0) + 1; });
  });

  const byType: Record<string, number> = {};
  recentPosts.forEach((p) => { byType[p.postType] = (byType[p.postType] ?? 0) + 1; });

  const stats = [
    { label: "Total Posts", value: totalPosts, icon: "📝", color: "from-purple-500 to-purple-700" },
    { label: "Published", value: publishedPosts, icon: "✅", color: "from-green-500 to-green-700" },
    { label: "Scheduled", value: scheduledPosts, icon: "📅", color: "from-blue-500 to-blue-700" },
    { label: "Drafts", value: draftPosts, icon: "📄", color: "from-gray-500 to-gray-700" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Analytics</h1>
        <p className="text-[#8888aa]">Track your content performance and publishing activity.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 border border-white/5">
            <div className="text-2xl mb-3">{s.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
            <div className="text-sm text-[#8888aa]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Posts by platform */}
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h2 className="text-white font-semibold mb-5">Posts by Platform</h2>
          {Object.keys(byPlatform).length === 0 ? (
            <p className="text-[#8888aa] text-sm">No data yet. Start posting!</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(byPlatform).sort((a, b) => b[1] - a[1]).map(([p, count]) => {
                const max = Math.max(...Object.values(byPlatform));
                return (
                  <div key={p}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-[#8888aa] capitalize">{p}</span>
                      <span className="text-white font-medium">{count}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className="gradient-bg h-1.5 rounded-full transition-all"
                        style={{ width: `${(count / max) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Posts by type */}
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h2 className="text-white font-semibold mb-5">Content Types</h2>
          {Object.keys(byType).length === 0 ? (
            <p className="text-[#8888aa] text-sm">No data yet.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(byType).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between p-3 bg-white/3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span>{type === "social" ? "📱" : type === "blog" ? "📝" : "🔍"}</span>
                    <span className="text-white text-sm capitalize">{type === "seo" ? "SEO Blog" : type}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Connected platforms */}
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h2 className="text-white font-semibold mb-5">Connected Accounts</h2>
          {platforms.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-[#8888aa] text-sm mb-3">No platforms connected</p>
              <a href="/dashboard/platforms" className="text-purple-400 text-sm hover:underline">Connect now →</a>
            </div>
          ) : (
            <div className="space-y-3">
              {platforms.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                    {p.platform[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium capitalize">{p.platform}</div>
                    <div className="text-[#8888aa] text-xs">{p.accountName}</div>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Activity note */}
      <div className="glass rounded-2xl p-6 border border-purple-500/20">
        <div className="flex items-start gap-4">
          <span className="text-2xl">📈</span>
          <div>
            <h3 className="text-white font-semibold mb-1">Advanced Analytics Coming Soon</h3>
            <p className="text-[#8888aa] text-sm">
              Real-time engagement tracking, reach metrics, follower growth, best-time-to-post recommendations, and competitor analysis are launching with Pro v2. Connect your platforms to unlock tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
