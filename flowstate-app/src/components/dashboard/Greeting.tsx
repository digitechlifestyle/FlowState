"use client";

import { useState, useEffect } from "react";

export default function Greeting({ name }: { name: string }) {
  const [period, setPeriod] = useState<string | null>(null);

  useEffect(() => {
    const h = new Date().getHours();
    setPeriod(h < 12 ? "morning" : h < 18 ? "afternoon" : "evening");
  }, []);

  return (
    <h1 className="text-2xl font-bold text-white mb-1">
      {period ? `Good ${period}, ${name} 👋` : `Welcome, ${name} 👋`}
    </h1>
  );
}
