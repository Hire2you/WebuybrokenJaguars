import { XJ_PAGE } from "@/lib/model-pages/xj";
import {
  createModelPage,
  createModelPageMetadata,
} from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(XJ_PAGE);

export default createModelPage(XJ_PAGE);
