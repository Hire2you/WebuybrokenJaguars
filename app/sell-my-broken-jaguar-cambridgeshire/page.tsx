import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-cambridgeshire";

export const metadata = areaMetadata(page);

export default function CambridgeshirePage() {
  return <AreaLanding page={page} />;
}
