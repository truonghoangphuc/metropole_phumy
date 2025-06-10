import { HeadingData } from "@/types/doc";


export default function HeadingText({ heading, className }: { heading: HeadingData, className?: string }) {

  const { Text, Tag, Color, Transform, Align } = heading;

  return (
    <Tag className={`${className} text-${Align.toLowerCase()} ${Transform.toLowerCase()}`} style={{ color: Color }}>
      {Text}
    </Tag>
  );
}