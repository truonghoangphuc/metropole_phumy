import { BaseDoc, BlockSettingData, HeadingData } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { GalleryData } from "../gallery/config";
export interface TabItem {
  id: number;
  Name: string;
  Title: string;  
  Icon: Media;
  Gallery: GalleryData
}

export interface BlockTabs extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Description: BlocksContent;
  Setting: BlockSettingData;
  Tabs: TabItem[]
}