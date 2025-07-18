import { BaseDoc, BlockSettingData, HeadingData, Link } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { TableCell } from "../table/config";

export interface BlockListing extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Description: BlocksContent;
  CTAs: Link[];
  Listing: TableCell[];
  Building: Media;
} 