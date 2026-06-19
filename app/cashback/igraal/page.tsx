import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function IgraalPage() {
  return <PlatformPage platformKey="igraal" {...platforms.igraal} />;
}