import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function BinancePage() {
  return <PlatformPage platformKey="binance" {...platforms.binance} />;
}