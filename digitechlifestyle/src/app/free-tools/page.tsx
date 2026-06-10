import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";
import { FreeToolsClient } from "@/components/FreeToolsClient";

export const metadata: Metadata = {
  title: "7 Free AI Tools You Should Be Using",
  description: "The free AI tools DigiTech Lifestyle readers actually use — no paid upgrades needed to get real value.",
  alternates: { canonical: "/free-tools" },
};

export default function FreeToolsPage() {
  return (
    <StandardPage
      eyebrow="Free for DigiTech Readers"
      title="7 Free AI Tools You Should Be Using"
      description="No paid plans. No credit cards. Enter your email and I'll unlock the full list — plus send you more useful finds as I come across them."
    >
      <FreeToolsClient />
    </StandardPage>
  );
}
