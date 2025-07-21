import { Link } from "@/types/doc";
import { CTAComponent } from "../cta/Component";

export interface FloatingMenu {
  Items: Link[]
}

export function FloatingMenu (props: FloatingMenu) {
  const { Items } = props;



  return (
    <div className="fixed right-3 bottom-4 flex flex-col gap-2 lg:gap-4 z-50">
      {
        Items && (
          Items.map((item) => (
            <CTAComponent className="size-12 lg:size-[72px]" key={item.id} {...item}></CTAComponent>
          ))
        )
      }
    </div>
  )
}