import type { NextConfig } from "next";
import { readFileSync } from "fs";
import { resolve } from "path";

function loadEnvKey(key: string): string | undefined {
  if (process.env[key]) return process.env[key];
  for (const file of [".env.local", ".env"]) {
    try {
      const content = readFileSync(resolve(process.cwd(), file), "utf8");
      const match = content.match(new RegExp(`^${key}=(.+)`, "m"));
      if (match) return match[1].trim().replace(/^["']|["']$/g, "");
    } catch {}
  }
}

const nextConfig: NextConfig = {
  env: {
    ANTHROPIC_API_KEY: loadEnvKey("ANTHROPIC_API_KEY") ?? "",
  },
};

export default nextConfig;
