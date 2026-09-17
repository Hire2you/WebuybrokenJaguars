import { E_PACE_PAGE } from "@/lib/model-pages/e-pace";
import {
  createModelPage,
  createModelPageMetadata,
} from "@/lib/model-pages/create-model-page";

export const metadata = createModelPageMetadata(E_PACE_PAGE);

export default createModelPage(E_PACE_PAGE);
