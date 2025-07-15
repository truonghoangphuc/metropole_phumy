import { Card as CardComponentProps } from "./config";
import RichText from "@/components/rte/RichText";
import { Media } from "@/components/media";

import '@/assets/styles/components/card.css';
import { cn } from "@/utilities/cn";

export interface Props extends CardComponentProps {
  locale: string;
  className?: string;
}

export function CardComponent(props: Props) {
  const { locale, Title, Description, BorderColor, Image, className } = props;

  const style = BorderColor.Colors.length > 1 ? {
    background: `linear-gradient(white, white) padding-box, ${BorderColor.Type}-gradient(${BorderColor.Type === 'linear' ? BorderColor.Degree + 'deg' : 'circle' }, ${BorderColor.Colors.map(color => color.Color + ' ' + color.Percent + '%').join(', ')}) border-box`
  } : {
    borderColor: BorderColor.Colors[0].Color
  };

  return (
    <div className={cn('card card-border', className)} data-locale={locale} style={style}>
      {
        Image && <Media className="media" resource={Image}/>
      }
      <p className="card-title">{Title}</p>
      {Description && <RichText content={Description} className="card-description"/>}      
    </div>
  )
}