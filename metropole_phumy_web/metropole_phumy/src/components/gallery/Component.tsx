import { cn } from "@/utilities/cn";
import { GalleryData as GalleryComponentProps } from "./config";

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import '@/assets/styles/components/gallery.css';
import { Media } from "@/components/media";
import HeadingText from "@/components/heading/Component";

export interface Props extends GalleryComponentProps {
  locale: string;
}

export function GalleryComponent(props: Props) {
  const { locale, Heading, Setting, Layout, Photos, Rows } = props;

  console.log(Rows);

  return (
    <section className={cn(
      Setting.CSS || "",
      `section-content section-gallery gallery-${Layout}`
    )} data-locale={locale} style={{
      backgroundColor: Setting.BackgroundColor || "transparent",
      color: Setting.TextColor || "inherit",
    }}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {Layout === "slides" && (
          <Carousel opts={{align: "start", loop: true}} className="gallery-content w-full">
            <CarouselContent>
              {Photos.map((photo) => (
                <CarouselItem key={photo.id} className="gallery-item md:basis-1/2 lg:basis-1/3">
                  <Media className="media" resource={photo.Image}/>
                  <p className="photo-date">{photo.Date || ''}</p>
                  <p className="photo-caption">{photo.Caption}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="carousel-controls">
              <CarouselPrevious/>
              <CarouselNext/>
            </div>
            <CarouselDots className="carousel-dots"/>
          </Carousel>)}

        {Layout === "grid" && (
          <div className="gallery-masonry">
            {Rows.map((row) => (
              <div className="masonry-row" key={row.id}>
                {row.Items.map((photo) => (
                  <div className="masonry-item" key={photo.id}>
                    <Media className="media" resource={photo.Image}/>
                    <p className="caption">{photo.Caption}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}          
      </div>
    </section>
  );
}



