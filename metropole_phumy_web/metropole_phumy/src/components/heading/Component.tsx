import { HeadingData } from "@/types/doc";


export default function HeadingText({ heading, className }: { heading: HeadingData, className?: string }) {

  const { Text, Tag, Color, ColorEnd, Transform, Align } = heading;

  const style = ColorEnd ? { background: `linear-gradient(90deg, ${Color}, ${ColorEnd}) text` } : { color: Color };

  return (
    <Tag className={`${className||''} text-${Align?.toLowerCase()} ${Transform?.toLowerCase()} ${ColorEnd ? 'text-gradient' : ''}`} style={style} dangerouslySetInnerHTML={ { __html: Text }}>      
    </Tag>
  );
}