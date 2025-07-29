import { cn } from "@/utilities/cn";
import { BlockCards as BlockCardsComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import { CardComponent } from "./Card";
import { Media } from "../media";

export interface Props extends BlockCardsComponentProps {
  locale: string;
}

export function BlockCardsComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Items, Type } = props;

  const _type = Type?.replaceAll(' ','-').toLocaleLowerCase() || '';

  const _list = _type.includes('border') ? 'gap-10 md:flex-row md:flex-wrap md:gap-5 lg:gap-10' : _type.includes('normal') ? 'py-4 gap-8 md:gap-4 lg:gap-16' : _type.includes('overlay') ? 'md:flex-row md:flex-wrap md:gap-8 md:justify-start' : 'md:flex-row md:gap-8';

  const _card = _type.includes('overlay') ? 'md:basis-[calc((100%_-_32px)/2)]' : 'md:basis-[calc((100%_-_40px)/3)] lg:basis-[calc((100%_-_80px)/3)]';

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-cards cards-${_type} ${Setting?.BackgroundImage ? 'media-background' : ''}`
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
        <div className={`cards flex flex-col justify-center ${_list}`}>
        {
          Items.map((item) => (
            <CardComponent className={`shrink-0 grow-0 ${_card} ${_type}`} {...item} locale={locale} key={item.id}/>
          ))
        }
        </div>
      </div>
      {Setting?.BackgroundImage && (
        <Media
          className="bg-media"
          resource={Setting?.BackgroundImage}
          {...(Setting.BackgroundImageMobile
            ? { resourceMobile: Setting.BackgroundImageMobile }
            : {})}
        />
      )}
    </section>
  );
}



