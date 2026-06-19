import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function RevolutPage() {
  return <PlatformPage platformKey="revolut" {...platforms.revolut} />;
}