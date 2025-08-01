import { BaseDoc, Link, Navigation } from "@/types/doc";
import { Media } from "@/types/media";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface RowText {
  Label: string;
  Value: string;
  Type: 'text' | 'email' | 'phone' | 'address';
  id: number;
}

export interface FooterData extends BaseDoc {
  Logo: Media;
  Navigation: Navigation[];
  Socials: Navigation;
  Color: {
    BGColor: string;
    TextColor: string;
    id: number;
  };
  Blocks: {
    Items: RowText[];
    id: number;
    Title: string;
    Description: BlocksContent;
    Name: string;
  }[];
  Copyright: string;
  CopyrightExtend: BlocksContent;
  Download: Link;
  SubscribeText: string;
  SubscribeButton: string;
  SubscribeThankYou: string;
}