import { getPillarMetadata, PillarPage } from "@/components/PillarPage";

export const metadata = getPillarMetadata("smart-lifestyle");

export default function SmartLifestylePage() {
  return <PillarPage slug="smart-lifestyle" />;
}
