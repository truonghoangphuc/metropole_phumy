import { BaseDoc, Block } from "./doc";
import { Media } from "./media";

export interface Page extends BaseDoc {
  title: string;
  slug: string;
  slugAlternate: string;
  metaTag: {
    title: string | null;
    description: string | null;
    keywords: string | null;
  };
  openGraph: {
    title: string | null;
    type: string | null;
    url: string | null;
    image: Media | null;
  };
  layout: Block[];
}