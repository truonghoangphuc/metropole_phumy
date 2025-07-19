'use client'
import { BlockApartment as ApartmentComponentProps } from "./config";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { API_URL } from "@/utilities/constant";
import { Media } from "../media";

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

  const handleShowDetail = () => {

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
                          <button className="btn btn-primary" onClick={handleShowDetail}>{DetailText}</button>
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
            </div>
          )
        }
      </div>
    </section>
  );
}