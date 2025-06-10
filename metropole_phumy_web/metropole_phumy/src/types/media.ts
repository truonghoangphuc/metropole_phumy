export interface Media {
  alternativeText: string;
  id: string;
  alt?: string | null;
  caption?: string | null;
  updatedAt: string;
  createdAt: string;
  url: string;
  name?: string | null;
  mime?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}