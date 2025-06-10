import { RTEData as RTEComponentProps } from "./config";
import HeadingText from "@/components/heading/Component";
import RichText from "./RichText";
import { cn } from "@/lib/utils";
import { Media } from "@/components/media";
import Link from "next/link";
import '@/assets/styles/section.css';


interface Props extends RTEComponentProps {
  locale: string
}

export async function RTEComponent(props: Props) {
  const { locale, Background, CTAs, Description, Heading, SubHeading, MediaPosition } = props;

  console.log(Background);

  return (
    <section
      className={cn(Background.CSS || "", `media-${MediaPosition} section-content`)}
      data-locale={locale}
      style={{ backgroundColor: Background.BackgroundColor || "transparent", color: Background.TextColor || "inherit" }}
    >
      <div className="container">
        {Heading && <HeadingText heading={Heading} className="heading" />}
        {SubHeading && <HeadingText heading={SubHeading} className="sub-heading" />}
        {Description && <RichText content={Description} />}
        {CTAs && <div className="ctas">
          {CTAs.map((cta) => (
            <Link key={cta.id} href={cta.Slug} target={cta.Target} className={cn("cta", cta.CSS)}>
              {cta.Title}
            </Link>
          ))}
        </div>}
      </div>
      {Background.BackgroundImage && (
        <div className="media">
          <Media
            resource={Background.BackgroundImage}
          />          
        </div>
      )}
    </section>
  );
}