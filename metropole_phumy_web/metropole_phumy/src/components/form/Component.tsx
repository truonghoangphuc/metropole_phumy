import { cn } from "@/utilities/cn";
import { BlockForm as BlockFormComponentProps, FormType } from "./config";

import HeadingText from "@/components/heading/Component";
import { Media } from "@/components/media";
import { FormClient } from "./Form";


export interface Props extends BlockFormComponentProps {
  locale: string;
}

export function BlockFormComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Form } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-bg section-form`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }}>
      <div className="container">
        <div className="form-wrapper" style={{backgroundColor: Form.Setting?.BGColor || "transparent",color: Form.Setting?.TextColor || "inherit"}}>
          {Heading && (
            <HeadingText heading={Heading} className="heading" />
          )}
          {SubHeading && (
            <HeadingText heading={SubHeading} className="sub-heading" />
          )}
          <div className="form-container">
            <FormClient {...Form}></FormClient>
          </div>
        </div>
      </div>
      {Setting?.BackgroundImage && (
        <Media
          className="bg"
          resource={Setting?.BackgroundImage}
          {...(Setting?.BackgroundImageMobile
            ? { resourceMobile: Setting?.BackgroundImageMobile }
            : {})}
        />
      )}
    </section>
  );
}
