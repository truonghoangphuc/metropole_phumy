import { cn } from "@/utilities/cn";
import { GalleryData as GalleryComponentProps } from "./config";

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import '@/assets/styles/components/gallery.css';
import { Media } from "@/components/media";
import HeadingText from "@/components/heading/Component";
import RichText from "../rte/RichText";

export interface Props extends GalleryComponentProps {
  locale: string;
}

export function GalleryComponent(props: Props) {
  const { locale, Heading, Setting, Layout, Photos, Rows } = props;

  // console.log(Rows);

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-gallery gallery-${Layout}`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {Layout === "slides" && (
          <Carousel opts={{align: "start", loop: true}} className="gallery-content w-full">
            <CarouselContent className="-mx-4 md:-ml-4 md:mr-0">
              {Photos.map((photo) => (
                <CarouselItem key={photo.id} className="pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <div className="gallery-item">
                    <Media className="media" resource={photo.Image}/>
                    <div className="gallery-item-content">
                      <p className="photo-date">{photo.Date || ''}</p>
                      <p className="photo-caption">{photo.Caption}</p>
                      {photo.Description && <RichText content={photo.Description} className="photo-description"/>}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="carousel-controls">
              <CarouselPrevious className="prev disabled:hidden left-0"/>
              <CarouselNext className="next disabled:hidden right-0"/>
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
                    {
                      photo.Caption && (
                        <p className="caption">{photo.Caption}</p>
                      )
                    }
                    {
                      photo.Description && (
                        <RichText content={photo.Description} className="photo-description"/>
                      )
                    }
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



