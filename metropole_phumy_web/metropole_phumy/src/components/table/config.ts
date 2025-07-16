import { BaseDoc, BlockSettingData, HeadingData, Link } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface TableCell extends BaseDoc {
  Label: string;
  Content: BlocksContent;
}

export interface BlockTable extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Description: BlocksContent;
  Video: Media;
  VideoPoster?: Media;
  CTA: Link;
  Table: TableCell[]
}