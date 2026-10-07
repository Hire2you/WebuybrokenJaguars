import AreaLanding, { areaMetadata } from "@/lib/AreaLanding";
import page from "@/lib/area-suffolk";
export const metadata = areaMetadata(page);
export default function SuffolkPage() { return <AreaLanding page={page} />; }
