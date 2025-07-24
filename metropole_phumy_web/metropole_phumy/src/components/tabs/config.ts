import { BaseDoc, BlockSettingData, HeadingData, Link } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { GalleryData } from "../gallery/config";
import { BlockCards } from "../cards/config";
import { BlockApartment } from "../apartment/config";
export interface TabItem {
  id: number;
  Name: string;
  Title: string;  
  Icon: Media;
  Gallery: GalleryData
  Photos: Media[]
  CTA: Link
  Card?: BlockCards
  Apartments?: BlockApartment
  PopupCTAs: Link[]
}

export interface BlockTabs extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Description: BlocksContent;
  Setting: BlockSettingData;
  Tabs: TabItem[]
}