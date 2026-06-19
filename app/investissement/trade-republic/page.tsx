import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function TradeRepublicPage() {
  return (
    <PlatformPage
      platformKey="tradeRepublic"
      {...platforms.tradeRepublic}
    />
  );
}