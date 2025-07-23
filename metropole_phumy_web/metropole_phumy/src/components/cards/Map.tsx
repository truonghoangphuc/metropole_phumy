import { cn } from "@/utilities/cn";
import { BlockMap as BlockMapComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import { CardComponent } from "./Card";
import { Media } from "../media";

export interface Props extends BlockMapComponentProps {
  locale: string;
}

export function BlockMapComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Cards, Map, MapBuilding } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-map`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }} {...Setting?.htmlID ? {id:Setting?.htmlID}:{}}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {SubHeading && (
          <HeadingText heading={SubHeading} className="sub-heading" />
        )}
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-9">
          <div className="map-container">            
            {Map && <div className="map">
              {MapBuilding && <Media className="building" resource={MapBuilding} />}
              <Media className="map-media" resource={Map} />              
            </div>}
          </div>
          <div className="cards flex flex-col gap-3">
          {
            Cards.map((item) => (
              <CardComponent className="card-bullet" {...item} locale={locale} key={item.id}/>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
}



