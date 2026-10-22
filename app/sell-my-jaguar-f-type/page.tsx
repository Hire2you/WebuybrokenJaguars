import { F_TYPE_PAGE } from "@/lib/model-pages/f-type";
import { createModelPage, createModelPageMetadata } from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(F_TYPE_PAGE);
export default createModelPage(F_TYPE_PAGE);
