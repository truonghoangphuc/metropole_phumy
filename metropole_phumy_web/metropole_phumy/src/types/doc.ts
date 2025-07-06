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
  Type: string;
  id: number;
}

export interface HeadingData {
  Text: string;
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  Color: string;
  Transform: string;
  Align: string;
}

export interface BlockSettingData {
  BackgroundImageMobile: Media;
  BackgroundImage: Media;
  BackgroundColor: string;
  TextColor: string;
  CSS: string | null;
}

export interface Block {
  __component: string;
  [key: string]: unknown;
}