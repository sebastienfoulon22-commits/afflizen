import PlatformPage from "@/components/PlatformPage";
import { platforms } from "@/data/platforms";

export default function OvhPage() {
  return <PlatformPage platformKey="ovh" {...platforms.ovh} />;
}