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