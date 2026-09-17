import { F_PACE_PAGE } from "@/lib/model-pages/f-pace";
import {
  createModelPage,
  createModelPageMetadata,
} from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(F_PACE_PAGE);

export default createModelPage(F_PACE_PAGE);
