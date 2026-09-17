import { E_PACE_PAGE } from "@/lib/model-pages/e-pace";
import { F_PACE_PAGE } from "@/lib/model-pages/f-pace";
import { I_PACE_PAGE } from "@/lib/model-pages/i-pace";
import { XE_PAGE } from "@/lib/model-pages/xe";
import { XJ_PAGE } from "@/lib/model-pages/xj";
import type { ModelPageContent } from "@/lib/model-pages/types";

export const MODEL_PAGE_CONTENT: Record<string, ModelPageContent> = {
  "i-pace": I_PACE_PAGE,
  "e-pace": E_PACE_PAGE,
  "xj": XJ_PAGE,
  "f-pace": F_PACE_PAGE,
  "xe": XE_PAGE,
};

export function getModelPageContent(modelKey: string): ModelPageContent | null {
  return MODEL_PAGE_CONTENT[modelKey] ?? null;
}

export function getAllModelPageKeys(): string[] {
  return Object.keys(MODEL_PAGE_CONTENT);
}

export function getAllModelPageSlugs(): string[] {
  return Object.values(MODEL_PAGE_CONTENT).map((page) => page.slug);
}
