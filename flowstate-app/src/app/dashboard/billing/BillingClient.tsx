"use client";

import { useState } from "react";

interface Props {
  planKey: "pro" | "agency" | "portal";
  planName: string;
  price: number;
}

export default function BillingClient({ planKey, planName, price }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const endpoint = planKey === "portal" ? "/api/stripe/portal" : "/api/stripe/checkout";
      const body = planKey === "portal" ? {} : { plan: planKey };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  }

  if (planKey === "portal") {
    return (
      <button
        onClick={handleClick}
        disabled={loading}
        className="text-sm glass border border-white/10 text-white px-5 py-2.5 rounded-xl hover:border-purple-500/40 transition-all disabled:opacity-50 font-medium"
      >
        {loading ? "Loading..." : "Open billing portal →"}
      </button>
    );
  }

  if (price === 0) return null;

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50"
    >
      {loading ? "Loading..." : `Upgrade to ${planName}`}
    </button>
  );
}
