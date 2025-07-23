import { Link } from "@/types/doc";
import { CTAComponent } from "../cta/Component";

export interface FloatingMenu {
  Items: Link[]
}

export function FloatingMenu (props: FloatingMenu) {
  const { Items } = props;



  return (
    <div className="floating-bar">
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