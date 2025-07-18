import { cn } from "@/utilities/cn";
import { BlockCards as BlockCardsComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import { CardComponent } from "./Card";

export interface Props extends BlockCardsComponentProps {
  locale: string;
}

export function BlockCardsComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Items } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-cards`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {SubHeading && (
          <HeadingText heading={SubHeading} className="sub-heading" />
        )}
        <div className="cards flex flex-col md:flex-row flex-wrap gap-10 md:gap-5 lg:gap-10 justify-center">
        {
          Items.map((item) => (
            <CardComponent className="shrink-0 grow-0 md:basis-[calc((100%_-_40px)/3)] lg:basis-[calc((100%_-_80px)/3)]" {...item} locale={locale} key={item.id}/>
          ))
        }
        </div>
      </div>
    </section>
  );
}



