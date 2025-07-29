// 'use client'
import { Link as CTAItem } from "@/types/doc";
import { Media } from "../media";
import { Apartment } from "./config";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";


import '../../assets/styles/components/apartment.css';
import { CTAComponent } from "../cta/Component";
// id: number;  
// Title: string;
// Photo: Media;
// Gallery: Media[];
// HomeKey: string;
// HomeFloor: string;
// HomeSize: string;
// HomeSizeIn: string;
// HomeSizeOut: string;
// HomeKeyPlan: Media;

export interface Props extends Apartment {
  locale: string;
  popup: CTAItem[]
}

export function DialogApartment (props: Props) {
  const {Gallery, HomeKey, Title, HomeFloor, HomeSizeIn, HomeSizeOut, HomeKeyPlan, popup} = props;

  const t = useTranslations("apartment");
  
  return (
    <div className="dialog-apartment">
      <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-8">
        <div className="slides">
          <Carousel opts={{align: "start", loop: true}} className="gallery-content w-full">
            <CarouselContent className="">
              {Gallery.map((photo) => (
                <CarouselItem key={photo.id} className="basis-full">
                  <div className="gallery-item">
                    <Media className="media" resource={photo}/>
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
        <div className="content lg:flex-1/2">
          <p className="tag">{t('key')}: {HomeKey}</p>
          <p className="font-bold uppercase text-primary text-xl lg:text-[32px] mb-4 lg:mb-6">{Title}</p>
          <ul>
            <li>
              <span>{t('floor')}:</span><span>{HomeFloor}</span>
            </li>
            <li>
              <span>{t('sizein')}:</span><span>{HomeSizeOut}m<sup>2</sup></span>
            </li>
            <li>
              <span>{t('sizeout')}:</span><span>{HomeSizeIn}m<sup>2</sup></span>
            </li>
            {
              HomeKeyPlan && (
                <li>
                  <span>{t('plan')}</span>
                  <span>
                    <Media className="media" resource={HomeKeyPlan}/>
                  </span>
                </li>
              )
            }
          </ul>
          <div className="ctas">
            {/* <Link href={`#`} className="btn outline outline-primary"><span>{t('readmore')}</span></Link>
            <Link href={`#`} className="btn btn-primary"><span>{t('reg')}</span></Link> */}
            {
              popup.map((cta, index) => <CTAComponent key={cta.id} {...cta} className={(index%2 === 0) ? 'btn outline outline-primary':'btn btn-primary'}/>)
            }            
          </div>
        </div>
      </div>
    </div>
  )
}