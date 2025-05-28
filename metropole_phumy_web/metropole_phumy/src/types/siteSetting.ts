import { Media } from "./media";

export interface Sitesetting {
  id: string;
  fav?: (string | null) | Media;
  title: string;
}