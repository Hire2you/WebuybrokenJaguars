import { I_PACE_PAGE } from "@/lib/model-pages/i-pace";
import {
  createModelPage,
  createModelPageMetadata,
} from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(I_PACE_PAGE);

export default createModelPage(I_PACE_PAGE);
