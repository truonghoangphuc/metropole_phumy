'use client'
import { Apartment, BlockApartment as ApartmentComponentProps } from "./config";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { API_URL } from "@/utilities/constant";
import { Media } from "../media";
import { useState } from "react";
import { DialogApartment } from "./Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export interface Props extends ApartmentComponentProps {
  locale: string;
}

// Tag: string
// Background: Media
// MainPhoto: GalleryItem
// Apartments: Apartment[]
// ListingText: string
// DetailText: string

export function ApartmentComponent(props: Props) {
  const { locale, Tag, Background, MainPhoto, ListingText, DetailText, Apartments } = props;

  const [selected, setSelected] = useState<Apartment|null>();
  const [open, setOpen] = useState<boolean>(false);

  const handleShowDetail = (el:Apartment) => {
    setSelected(el);
    setOpen(true);
  }

  return (
    <section
      className={`section-content section-apartments`}
      data-locale={locale}
      style={
        Background?.url
          ? { backgroundImage: `url(${API_URL}${Background.url})` }
          : {}
      }
      id="detailA"
    >
      <div className="container">
        <div className="main-part">
          <p className="tag">{Tag}</p>
          <div className="main-photo">
            <p className="block-title">{MainPhoto.Caption}</p>
            <Media className="main-media" resource={MainPhoto.Image}/>
          </div>
        </div>
        {
          Apartments && (
            <div className="slides-part">
              <p className="block-title">{ListingText}</p>
              <Carousel opts={{align: "start", loop: true}} className="apartment-slides w-full">
                <CarouselContent className="apartment-slide-wrapper">
                  {Apartments.map((apartment) => (
                    <CarouselItem key={apartment.id} className="pl-4">
                      <div className="apartment-item">
                        <Media className="media" resource={apartment.Photo}/>
                        <div className="apartment-item-content">
                          <p className="home-key">{apartment.Title}</p>
                          <ul className="ul-bullet">
                            <li>{apartment.HomeKey}</li>
                            <li>{apartment.HomeSize}</li>
                            <li>{apartment.HomeFloor}</li>
                          </ul>
                          <button className="btn btn-primary" onClick={()=>handleShowDetail(apartment)}>{DetailText}</button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="carousel-controls">
                  <CarouselPrevious className="prev disabled:hidden left-0"/>
                  <CarouselNext className="next disabled:hidden right-0"/>
                </div>
              </Carousel>
              <Dialog
                open={open}
                onOpenChange={(isOpen) => {
                  if (isOpen === true) return;
                  setSelected(null);
                  setOpen(false);
                }}
              >
                <DialogContent className="bg-white border-0 gap-0 lg:py-10 lg:px-14 lg:min-w-4xl lg:max-w-4/5 xl:max-w-5xl">
                  <DialogHeader>
                    <DialogClose className="dialog-close ring-offset-0 rounded-full opacity-100 transition-none focus:ring-0 focus:ring-offset-0 focus:outline-hidden "/>
                    <VisuallyHidden><DialogTitle></DialogTitle>{selected?.Title}</VisuallyHidden>
                  </DialogHeader>
                  {
                    selected && <DialogApartment {...selected} locale={locale}/>
                  }
                </DialogContent>
              </Dialog>
            </div>
          )
        }
      </div>
    </section>
  );
}