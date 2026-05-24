import { getPillarMetadata, PillarPage } from "@/components/PillarPage";

export const metadata = getPillarMetadata("ai-tools");

export default function AiToolsPage() {
  return <PillarPage slug="ai-tools" />;
}
