import { cn } from "@/lib/utils";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";


type Props = {
  content: BlocksContent;
  className?: string;
}

export default function RichText({ content, className }: Props) {
  return (
    <div className={cn("rte-content", className || '')}>
      <BlocksRenderer content={content} />
    </div>
  );
};
