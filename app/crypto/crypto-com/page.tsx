import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function CryptoComPage() {
  return <PlatformPage platformKey="cryptoCom" {...platforms.cryptoCom} />;
}