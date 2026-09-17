import { XE_PAGE } from "@/lib/model-pages/xe";
import {
  createModelPage,
  createModelPageMetadata,
} from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(XE_PAGE);

export default createModelPage(XE_PAGE);
