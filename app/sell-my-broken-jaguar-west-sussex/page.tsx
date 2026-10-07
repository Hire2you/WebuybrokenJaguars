import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-west-sussex";
export const metadata = areaMetadata(page);
export default function WestSussexPage() { return <AreaLanding page={page} />; }
