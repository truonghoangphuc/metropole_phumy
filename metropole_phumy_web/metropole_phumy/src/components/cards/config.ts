import { BaseDoc, BlockSettingData, HeadingData } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ColorStop {
  Color: string;
  Percent: number;
}

export interface Gradient {
  Type: "linear" | "radial";
  Degree?: number;
  Colors: ColorStop[];
}

export interface Card {
  id: number;
  Title: string;
  Description: BlocksContent;
  Image: Media;
  BorderColor: Gradient;
}

export interface BlockCards extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Items: Card[];
}