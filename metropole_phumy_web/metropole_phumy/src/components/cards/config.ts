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
  SubTitle: string;
  Description: BlocksContent;
  Image: Media;
  BorderColor: Gradient;
  Icon: Media;
}

export interface BlockCards extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Items: Card[];
  Type: string
}

export interface BlockMap extends BaseDoc {
  Heading: HeadingData;
  SubHeading: HeadingData;
  Setting: BlockSettingData;
  Map: Media;
  MapBuilding: Media;
  Cards: Card[];
}