import type { FaqItem } from "@/lib/faq";

export type ModelSection = {
  id: string;
  background?: "white" | "offwhite" | "black";
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  items?: string[];
  priceBand?: {
    intro?: string;
    movers: string[];
    footer?: string;
  };
};

export type ModelPageContent = {
  slug: string;
  name: string;
  metaTitle: string;
  title: string;
  description: string;
  serviceType: string;
  coverImage: string;
  heroEyebrow: string;
  heroParagraphs: string[];
  sections: ModelSection[];
  faqs: FaqItem[];
  areaServed: string[];
};
