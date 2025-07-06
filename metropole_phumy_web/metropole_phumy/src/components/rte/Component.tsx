import { RTEData as RTEComponentProps } from "./config";
import HeadingText from "@/components/heading/Component";
import RichText from "./RichText";
import { cn } from "@/utilities/cn";
import { Media } from "@/components/media";
import Link from "next/link";
import '@/assets/styles/section.css';

import '@/assets/styles/components/block_contact.css';


interface Props extends RTEComponentProps {
  locale: string
}

export async function RTEComponent(props: Props) {
  const { locale, Background, CTAs, Description, Heading, SubHeading, MediaPosition } = props;

  return (
    <section
      className={cn(
        Background.CSS || "",
        `media-${MediaPosition} section-content`
      )}
      data-locale={locale}
      style={{
        backgroundColor: Background.BackgroundColor || "transparent",
        color: Background.TextColor || "inherit",
      }}
    >
      <div className="container">
        <div className="content">
          {Heading && <HeadingText heading={Heading} className="heading" />}
          {SubHeading && (
            <HeadingText heading={SubHeading} className="sub-heading" />
          )}
          {Description && <RichText content={Description} />}
          {CTAs && (
            <div className="ctas">
              {CTAs.map((cta) => (
                <Link
                  key={cta.id}
                  href={cta.Slug}
                  target={cta.Target}
                  className={cn("cta", cta.CSS)}
                >
                  {cta.Title}
                </Link>
              ))}
            </div>
          )}
        </div>
        {Background.BackgroundImage && MediaPosition !== "background" && (
          <Media
            className="media"
            resource={Background.BackgroundImage}
            {...(Background.BackgroundImageMobile
              ? { resourceMobile: Background.BackgroundImageMobile }
              : {})}
          />
        )}
      </div>
      {Background.BackgroundImage && MediaPosition === "background" && (
        <Media
          className="media"
          resource={Background.BackgroundImage}
          {...(Background.BackgroundImageMobile
            ? { resourceMobile: Background.BackgroundImageMobile }
            : {})}
        />
      )}
    </section>
  );
}