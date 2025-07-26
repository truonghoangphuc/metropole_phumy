'use client'
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

  const handlePopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    console.log(e.target)
    const element = e.target as HTMLAnchorElement;

    if (element && element.href !== '') {

      e.preventDefault();
            
      const section = document.querySelector(`${element.getAttribute('href')}`);

      if (section) {
        const form = section.querySelector('.form-overlay');

        if (form) {
          // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          const overlay = document.createElement('div');
          overlay.className = 'popup-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50';
          overlay.setAttribute('data-state','open');
          form.classList.add('in-popup');
          document.body.classList.add('open-popup');
          document.body.append(overlay);
        }
      }


      return;
    }

    return;
  }

  return (
    <Link
      key={id}
      href={Slug}
      target={Target}
      className={cn("cta", className||'', Type.toLocaleLowerCase() , CSS)}
      onClick={handlePopup}
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