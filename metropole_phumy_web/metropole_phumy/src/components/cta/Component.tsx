import { Link as CTAComponentProps } from "@/types/doc";
import { cn } from "@/utilities/cn";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/utilities/constant";

export interface Props extends CTAComponentProps {
  className?: string
}

export function CTAComponent(props: Props) {
  const { id, Slug, Target, CSS, Title, Type, Icon, className } = props;

  return (
    <Link
      key={id}
      href={Slug}
      target={Target}
      className={cn("cta", className||'', Type.toLocaleLowerCase() , CSS)}
    >
      {Icon && (
        <Image
          src={`${API_URL}${Icon.url}`}
          alt={Title}
          width={Icon.width || 24}
          height={Icon.height || 24}
        />
      )}
      <span>{Title}</span>
    </Link>
  );
}