import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PLANS } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;
  const plan = session!.user.plan as keyof typeof PLANS;

  const [totalPosts, scheduledPosts, publishedToday, platforms] = await Promise.all([
    prisma.post.count({ where: { userId } }),
    prisma.post.count({ where: { userId, status: "scheduled" } }),
    prisma.post.count({
      where: {
        userId,
        status: "published",
        publishedAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
      },
    }),
    prisma.connectedPlatform.count({ where: { userId, isActive: true } }),
  ]);

  const recentPosts = await prisma.post.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const planLimits = PLANS[plan] ?? PLANS.free;

  const stats = [
    { label: "Scheduled Posts", value: scheduledPosts, icon: "📅", change: "+3 this week" },
    { label: "Published Today", value: publishedToday, icon: "✅", change: `${planLimits.postsPerDay} daily limit` },
    { label: "Connected Platforms", value: platforms, icon: "🌐", change: `${planLimits.platforms === 999 ? "Unlimited" : planLimits.platforms} available` },
    { label: "Total Posts", value: totalPosts, icon: "📝", change: "All time" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">
          Good {getGreeting()}, {session!.user.name?.split(" ")[0] ?? "there"} 👋
        </h1>
        <p className="text-[#8888aa]">Here&apos;s what&apos;s happening with your social presence today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-5 border border-white/5 card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-[#8888aa] mb-1">{stat.label}</div>
            <div className="text-xs text-purple-400">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Plan usage */}
      {plan === "free" && (
        <div className="glass rounded-2xl p-6 border border-purple-500/20 mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold mb-1">You&apos;re on the Free plan</h3>
            <p className="text-[#8888aa] text-sm">Upgrade to Pro for 5 posts/day, 5 platforms, and 100 AI credits/month.</p>
          </div>
          <Link href="/dashboard/billing" className="gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0 ml-4">
            Upgrade to Pro →
          </Link>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold">Recent Posts</h2>
            <Link href="/dashboard/compose" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              + New post
            </Link>
          </div>
          {recentPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">✏️</div>
              <p className="text-[#8888aa] mb-4">No posts yet. Create your first post!</p>
              <Link href="/dashboard/compose" className="gradient-bg text-white px-6 py-2.5 rounded-xl font-medium text-sm inline-block hover:opacity-90 transition-opacity">
                Create post
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentPosts.map((post) => {
                const platforms = JSON.parse(post.platforms || "[]") as string[];
                return (
                  <div key={post.id} className="flex items-start gap-4 p-4 bg-white/3 rounded-xl border border-white/5">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      post.status === "published" ? "bg-green-400" :
                      post.status === "scheduled" ? "bg-yellow-400" :
                      "bg-[#8888aa]"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm line-clamp-2 mb-1">{post.content}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#8888aa] capitalize">{post.status}</span>
                        <span className="text-xs text-[#8888aa]">{platforms.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 border border-white/5">
            <h2 className="text-white font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { href: "/dashboard/compose", icon: "✏️", label: "Write with AI" },
                { href: "/dashboard/calendar", icon: "📅", label: "View calendar" },
                { href: "/dashboard/platforms", icon: "🔗", label: "Connect platform" },
                { href: "/dashboard/analytics", icon: "📊", label: "View analytics" },
              ].map((action) => (
                <Link key={action.href} href={action.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span>{action.icon}</span>
                  <span className="text-sm text-[#8888aa] group-hover:text-white transition-colors">{action.label}</span>
                  <span className="ml-auto text-[#8888aa] text-xs group-hover:text-white transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-white/5">
            <h2 className="text-white font-semibold mb-3">AI Credits</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#8888aa]">Used this month</span>
              <span className="text-sm text-white font-medium">3 / {planLimits.aiCredits}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="gradient-bg h-2 rounded-full transition-all"
                style={{ width: `${Math.min((3 / planLimits.aiCredits) * 100, 100)}%` }}
              />
            </div>
            {plan === "free" && (
              <p className="text-xs text-[#8888aa] mt-3">
                <Link href="/dashboard/billing" className="text-purple-400 hover:underline">Upgrade</Link> for more AI credits
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 18) return "afternoon";
  return "evening";
}
