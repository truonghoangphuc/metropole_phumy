import { BaseDoc, BlockSettingData, HeadingData, Link } from "@/types/doc";
import { BlocksContent } from "@strapi/blocks-react-renderer";


export interface RTEData extends BaseDoc {
  Description: BlocksContent;
  Heading: HeadingData;
  SubHeading: HeadingData;
  Background: BlockSettingData;
  CTAs: Link[];
  MediaPosition: "left" | "right" | "background";
}