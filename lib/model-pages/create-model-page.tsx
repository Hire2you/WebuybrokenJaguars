import ModelLandingPage from "@/components/ModelLandingPage";
import { buildPageMetadata } from "@/lib/seo";
import type { ModelPageContent } from "@/lib/model-pages/types";

export function createModelPageMetadata(content: ModelPageContent) {
  return buildPageMetadata({
    title: content.metaTitle,
    description: content.description,
    path: `/${content.slug}`,
  });
}

export function createModelPage(content: ModelPageContent) {
  return function ModelPage() {
    return <ModelLandingPage content={content} />;
  };
}
