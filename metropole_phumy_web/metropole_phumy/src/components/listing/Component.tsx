import { cn } from "@/utilities/cn";
import { BlockListing as BlockListingComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import RichText from "@/components/rte/RichText";
import { Media } from "@/components/media";
import {CTAComponent} from "@/components/cta/Component";


export interface Props extends BlockListingComponentProps {
  locale: string;
}

export function BlockListingComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Building, CTAs, Listing, Description } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-listing`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }} {...Setting?.htmlID ? {id:Setting?.htmlID}:{}}>
      <div className="container">
        <div className="group-text">
          {Heading && (
            <HeadingText heading={Heading} className="heading" />
          )}
          {SubHeading && (
            <HeadingText heading={SubHeading} className="sub-heading" />
          )}
          <RichText content={Description} className="description" />
          <div className="ctas">
            {CTAs && CTAs.map((cta) => (
              <CTAComponent
                key={cta.id}
                id={cta.id}
                Slug={cta.Slug}
                Target={cta.Target}
                CSS={cta.CSS}
                Title={cta.Title}
                Type={cta.Type}
                Icon={cta.Icon}
              />
            ))}
          </div>
        </div>
        <div className="group-listing">
          <div className="listing">
            {Listing && Listing.map((item) => (
              <div key={item.id} className="listing-item">
                <div className="label">{item.Label}</div>
                <div className="content">
                  <RichText content={item.Content} />
                </div>
              </div>
            ))}
          </div>
          <div className="building">
          {
            Building && (
              <Media resource={Building} />
            )
          }          
          </div>
        </div>
      </div>
    </section>
  );
}



