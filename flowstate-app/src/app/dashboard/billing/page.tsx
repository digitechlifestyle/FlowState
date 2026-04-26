import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PLANS } from "@/lib/utils";
import BillingClient from "./BillingClient";

export default async function BillingPage() {
  const session = await auth();
  const user = await prisma.user.findUnique({ where: { id: session!.user.id } });

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Billing & Plans</h1>
        <p className="text-[#8888aa]">Manage your subscription and upgrade your plan.</p>
      </div>

      {/* Current plan */}
      <div className="glass rounded-2xl p-6 border border-white/5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-[#8888aa] uppercase tracking-wider mb-1">Current Plan</div>
            <div className="text-2xl font-bold text-white capitalize">{user?.plan ?? "free"}</div>
            {user?.stripeCurrentPeriodEnd && (
              <div className="text-sm text-[#8888aa] mt-1">
                Renews {new Date(user.stripeCurrentPeriodEnd).toLocaleDateString()}
              </div>
            )}
          </div>
          <div className="text-4xl">
            {user?.plan === "agency" ? "🚀" : user?.plan === "pro" ? "⚡" : "🌱"}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {(Object.entries(PLANS) as [string, typeof PLANS[keyof typeof PLANS]][]).map(([key, plan]) => {
          const isCurrent = user?.plan === key;
          return (
            <div
              key={key}
              className={`rounded-2xl p-6 border relative flex flex-col ${
                key === "pro" && !isCurrent
                  ? "gradient-bg border-transparent"
                  : isCurrent
                  ? "border-purple-500/40 bg-purple-500/10"
                  : "glass border-white/10"
              }`}
            >
              {isCurrent && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                  CURRENT
                </div>
              )}
              {key === "pro" && !isCurrent && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white text-purple-600 text-xs font-bold px-3 py-0.5 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className="text-white font-semibold mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">${plan.price}</span>
                {plan.price > 0 && <span className="text-[#8888aa] text-sm">/mo</span>}
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <span className="text-purple-400 flex-shrink-0">✓</span>
                    <span className={key === "pro" && !isCurrent ? "text-purple-100" : "text-[#8888aa]"}>{f}</span>
                  </li>
                ))}
              </ul>
              {!isCurrent && (
                <BillingClient planKey={key as "pro" | "agency"} planName={plan.name} price={plan.price} />
              )}
            </div>
          );
        })}
      </div>

      {user?.plan !== "free" && (
        <div className="glass rounded-2xl p-5 border border-white/5">
          <h3 className="text-white font-medium mb-2">Manage Subscription</h3>
          <p className="text-[#8888aa] text-sm mb-4">Access the billing portal to update payment methods, view invoices, or cancel your subscription.</p>
          <BillingClient planKey="portal" planName="Billing Portal" price={0} />
        </div>
      )}
    </div>
  );
}
