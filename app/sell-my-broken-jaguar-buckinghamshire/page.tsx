import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-buckinghamshire";
export const metadata = areaMetadata(page);
export default function BuckinghamshirePage() { return <AreaLanding page={page} />; }
