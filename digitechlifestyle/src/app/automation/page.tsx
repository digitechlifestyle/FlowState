import { getPillarMetadata, PillarPage } from "@/components/PillarPage";

export const metadata = getPillarMetadata("automation");

export default function AutomationPage() {
  return <PillarPage slug="automation" />;
}
