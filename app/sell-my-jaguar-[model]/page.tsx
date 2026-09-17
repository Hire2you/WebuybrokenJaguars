import ModelLandingPage from "@/components/ModelLandingPage";
import { getModelPageContent, getAllModelPageKeys } from "@/lib/model-pages";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type ModelPageProps = {
  params: Promise<{ model: string }>;
};

export async function generateStaticParams() {
  return getAllModelPageKeys().map((model) => ({ model }));
}

export async function generateMetadata({ params }: ModelPageProps) {
  const { model } = await params;
  const content = getModelPageContent(model);

  if (!content) {
    return buildPageMetadata({
      title: "Page not found",
      description: "The page you are looking for could not be found.",
      path: `/sell-my-jaguar-${model}`,
      robots: { index: false, follow: true },
    });
  }

  return buildPageMetadata({
    title: content.metaTitle,
    description: content.description,
    path: `/${content.slug}`,
  });
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = await params;
  const content = getModelPageContent(model);

  if (!content) {
    notFound();
  }

  return <ModelLandingPage content={content} />;
}
