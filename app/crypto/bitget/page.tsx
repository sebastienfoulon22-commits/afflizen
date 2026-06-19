import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function BitgetPage() {
  return <PlatformPage platformKey="bitget" {...platforms.bitget} />;
}