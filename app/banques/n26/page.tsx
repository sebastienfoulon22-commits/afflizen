import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function N26Page() {
  return <PlatformPage platformKey="n26" {...platforms.n26} />;
}