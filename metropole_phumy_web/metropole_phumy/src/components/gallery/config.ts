import { BaseDoc, BlockSettingData, HeadingData } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";


export interface GalleryItem {
  id: number;
  Caption: string;
  Description: BlocksContent;
  Image: Media;
  Link: string;
  Date: string
}

export interface GalleryData extends BaseDoc {
  Heading: HeadingData;
  Setting: BlockSettingData;
  Layout: "grid" | "slides";
  Photos: GalleryItem[];
  Rows: {Items: GalleryItem[]; id: number}[];
}