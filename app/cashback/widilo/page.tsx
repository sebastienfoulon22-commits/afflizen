import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function WidiloPage() {
  return <PlatformPage platformKey="widilo" {...platforms.widilo} />;
}