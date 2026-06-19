import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function HostingerPage() {
  return <PlatformPage platformKey="hostinger" {...platforms.hostinger} />;
}