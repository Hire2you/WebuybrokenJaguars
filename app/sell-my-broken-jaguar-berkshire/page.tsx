import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-berkshire";
export const metadata = areaMetadata(page);
export default function BerkshirePage() { return <AreaLanding page={page} />; }
