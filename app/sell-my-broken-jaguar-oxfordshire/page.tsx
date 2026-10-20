import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-oxfordshire";

export const metadata = areaMetadata(page);

export default function OxfordshirePage() {
  return <AreaLanding page={page} />;
}
