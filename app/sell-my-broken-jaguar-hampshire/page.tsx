import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-hampshire";
export const metadata = areaMetadata(page);
export default function HampshirePage() { return <AreaLanding page={page} />; }
