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
    }} {...Setting?.htmlID ? {id:Setting?.htmlID}:{}}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {Layout === "slides" && (
          <Carousel opts={{align: "start", loop: true}} className="gallery-content w-full lg:w-auto">
            <CarouselContent className="-mx-4 md:-ml-4 md:mr-0 lg:-ml-8">
              {Photos.map((photo) => (
                <CarouselItem key={photo.id} className="pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3 lg:pl-8">
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
            {Rows.length < 3 && Rows.map((row) => (
              <div className={`masonry-row masonry-${row.Items.length}`} key={row.id}>
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
                        <div className="photo-description">
                          { photo.Caption && (
                            <p className="t-caption">{photo.Caption}</p>
                          )}
                          <RichText content={photo.Description} className="photo-description-text"/>
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            ))}
            {Rows.length >= 3 && (
              <Carousel opts={{align: "start", loop: true}} className="gallery-grid-content w-full">
                <CarouselContent className="mx-auto md:-ml-4 md:mr-0">
                {
                  Rows.map((row) => (
                  <CarouselItem key={row.id} className="px-1 md:pr-0 md:pl-4 basis-full md:basis-1/2">
                    <div className={`masonry-row masonry-${row.Items.length}`} key={row.id}>
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
                                <div className="photo-description">
                                  { photo.Caption && (
                                    <p className="t-caption">{photo.Caption}</p>
                                  )}
                                  <RichText content={photo.Description} className="photo-description-text"/>
                                </div>
                              )
                            }
                          </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
                </CarouselContent>
                <div className="gallery-carousel-controls">
                  <CarouselPrevious className="prev disabled:hidden left-0"/>
                  <CarouselNext className="next disabled:hidden right-0"/>
                </div>
              </Carousel>
            )}
          </div>
        )}          
      </div>
    </section>
  );
}



