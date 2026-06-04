"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Renders children only on the client — zero SSR output, zero hydration risk. */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}
