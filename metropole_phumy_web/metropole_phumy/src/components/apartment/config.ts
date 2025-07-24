import { BaseDoc } from "@/types/doc";
import { Media } from "@/types/media";
import { GalleryItem } from "../gallery/config";

export interface Apartment {
  id: number;  
  Title: string;
  Photo: Media;
  Gallery: Media[];
  HomeKey: string;
  HomeFloor: string;
  HomeSize: string;
  HomeSizeIn: string;
  HomeSizeOut: string;
  HomeKeyPlan: Media;
}

export interface BlockApartment extends BaseDoc {
  Tag: string
  Background: Media
  MainPhoto: GalleryItem
  Apartments: Apartment[]
  ListingText: string
  DetailText: string
  ShowMainPhoto: boolean
  DetailShowForm: boolean
}