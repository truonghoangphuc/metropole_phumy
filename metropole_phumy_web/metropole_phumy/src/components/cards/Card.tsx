import { Card as CardComponentProps } from "./config";
import RichText from "@/components/rte/RichText";
import { Media } from "@/components/media";

import '@/assets/styles/components/card.css';
import { cn } from "@/utilities/cn";
import { CTAComponent } from "../cta/Component";

export interface Props extends CardComponentProps {
  locale: string;
  className?: string;
}

export function CardComponent(props: Props) {
  const { locale, Title, SubTitle, Description, BorderColor, Image, Icon, className, CTAs } = props;

  const style = BorderColor?.Colors.length > 1 ? {
    background: `linear-gradient(white, white) padding-box, ${BorderColor.Type}-gradient(${BorderColor.Type === 'linear' ? BorderColor.Degree + 'deg' : 'circle' }, ${BorderColor.Colors.map(color => color.Color + ' ' + color.Percent + '%').join(', ')}) border-box`
  } : {
    borderColor: BorderColor?.Colors[0].Color
  };

  return (
    <div className={cn('card', className)} data-locale={locale} style={style}>
      {
        Image && <Media className="media" resource={Image}/>
      }
      {
        Icon && <Media className="icon" resource={Icon}/>
      }
      <div className="card-content">
        <p className="card-title">{Title}</p>
        {SubTitle && <p className="card-subtitle">{SubTitle}</p>}
        {
          Array.isArray(Description) ? <RichText content={Description} className="card-description" /> : <div dangerouslySetInnerHTML={{__html: Description}} className="card-description rte-content"></div>
        }
        {CTAs && (
          <div className="ctas pt-4 lg:pt-6">
            {CTAs.map((cta) => (
              <CTAComponent
                id={cta.id} 
                key={cta.id}
                Slug={cta.Slug}
                Target={cta.Target}
                CSS={cta.CSS}
                Title={cta.Title}
                Type={cta.Type}
                Icon={cta.Icon}
              >
              </CTAComponent>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}