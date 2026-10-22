import { XK_PAGE } from "@/lib/model-pages/xk";
import { createModelPage, createModelPageMetadata } from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(XK_PAGE);
export default createModelPage(XK_PAGE);
