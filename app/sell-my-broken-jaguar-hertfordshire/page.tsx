import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-hertfordshire";
export const metadata = areaMetadata(page);
export default function HertfordshirePage() { return <AreaLanding page={page} />; }
