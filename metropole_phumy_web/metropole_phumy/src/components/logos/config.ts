import { BaseDoc, BlockSettingData, HeadingData } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { GalleryItem } from "../gallery/config";


export interface BlockLogoVideo extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Description: BlocksContent;
  Video: Media;
  VideoPoster?: Media;
  Logos: GalleryItem[]
}