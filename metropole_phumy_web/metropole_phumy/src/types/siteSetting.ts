import { BlockForm } from "@/components/form/config";
import { Media } from "./media";
import { Link } from "./doc";

export interface SiteData {
  FavIcon?: Media;
  GTM?: string;
  GlobalForm?: BlockForm;
  FloattingMenu?: {
    Items: Link[]
  };
}
