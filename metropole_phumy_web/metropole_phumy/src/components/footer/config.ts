import { BaseDoc, Link } from "@/types/doc";
import { Media } from "@/types/media";

export interface RowText {
  Label: string;
  Value: string;
  Type: 'text' | 'email' | 'phone' | 'address';
  id: number;
}

export interface FooterData extends BaseDoc {
  Logo: Media;
  Navigation: {
    Items: Link[];
    id: number;
  }[];
  Color: {
    BGColor: string;
    TextColor: string;
    id: number;
  };
  Blocks: {
    Items: RowText[];
    id: number;
    Title: string;
  }[];
  Copyright: string;
}