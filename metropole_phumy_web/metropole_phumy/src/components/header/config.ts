import { BaseDoc, Link } from "@/types/doc";
import { Media } from "@/types/media";


export interface HeaderData extends BaseDoc {
  Logo: Media;
  Navigations: {
    Items: Link[];
    id: number;
  }[];
  DefaultColor: {
    BGColor: string;
    TextColor: string;
    id: number;
  };
  ScrollColor: {
    BGColor: string;
    TextColor: string;
    id: number;
  };
}