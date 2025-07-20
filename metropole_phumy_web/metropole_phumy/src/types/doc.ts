import { Media } from "./media";

export interface BaseDoc {
  documentId: string;
  id: number;
  createdAt:string;
  publishedAt:string;
  updatedAt:string;
}

export interface Link {
  CSS: string | null;
  Slug: string;
  Target: '_blank' | '_self' | '_parent' | '_top';
  Title: string;
  Type: 'normal' | 'button' | 'icon' | 'mixed';
  id: number;
  Icon: Media;
}

export interface HeadingData {
  Text: string;
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  Color: string;
  ColorEnd?: string;
  Transform: string;
  Align: string;
}

export interface BlockSettingData {
  BackgroundImageMobile: Media;
  BackgroundImage: Media;
  BackgroundColor: string;
  TextColor: string;
  CSS: string | null;
  htmlID: string
}

export interface Block {
  __component: string;
  [key: string]: unknown;
}

export interface Navigation {
  Items: Link[];
  id: number;
  Heading: HeadingData
}

export interface ColorSetting {
  TextColor: string,
  BGColor: string
}