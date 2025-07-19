import { cn } from "@/utilities/cn";
import { BlockLogoVideo as BlockLogoVideoComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import RichText from "@/components/rte/RichText";
import { Media } from "@/components/media";
import Link from "next/link";

export interface Props extends BlockLogoVideoComponentProps {
  locale: string;
}

export function BlockLogoVideoComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Video, VideoPoster, Logos, Description } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-logos`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1/2">
            {Heading && (
              <HeadingText heading={Heading} className="heading" />
            )}
            {SubHeading && (
              <HeadingText heading={SubHeading} className="sub-heading" />
            )}
            {
              Description && (
                <RichText content={Description} className="description" />
              )
            }
            <div className="flex flex-wrap gap-4 logos">
              {
                Logos && (
                  Logos.map((logo) => (
                    <Link key={logo.id} href={logo.Link || 'javascript:void(0)'}>
                      <Media resource={logo.Image} />                
                    </Link>
                  )
                ))
              }
            </div>
          </div>
          <div className="video-wrapper lg:flex-1/2">
          {
            Video && (
              <Media resource={Video} autoPlay={false} poster={VideoPoster}/>
            )
          }
          </div>
        </div>
      </div>
    </section>
  );
}



