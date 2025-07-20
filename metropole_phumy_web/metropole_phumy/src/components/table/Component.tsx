import { cn } from "@/utilities/cn";
import { BlockTable as BlockTableComponentProps } from "./config";

import HeadingText from "@/components/heading/Component";
import RichText from "@/components/rte/RichText";
import { Media } from "@/components/media";
import {CTAComponent} from "@/components/cta/Component";


export interface Props extends BlockTableComponentProps {
  locale: string;
}

export function BlockTableComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Video, VideoPoster, CTA, Table,Description } = props;

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-table`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }} {...Setting?.htmlID ? {id:Setting?.htmlID}:{}}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {SubHeading && (
          <HeadingText heading={SubHeading} className="sub-heading" />
        )}
        <RichText content={Description} className="description" />
        <div className="flex flex-col lg:flex-row gap-8">
          {
            Table && (
              <table className="table" cellPadding={0} cellSpacing={0}>
                <tbody>
                { Table.map((row, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-label" valign="top">
                      <div className="cell-label">{row.Label}</div>                      
                    </td>
                    <td className="table-content" valign="top">
                      <div className="cell-content">
                        <RichText content={row.Content} />
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            )
          }
          <div className="video-wrapper">
          {
            Video && (
              <Media resource={Video} autoPlay={false} poster={VideoPoster}/>
            )
          }
          {CTA && (
            <CTAComponent
              id={CTA.id}
              Slug={CTA.Slug}
              Target={CTA.Target}
              CSS={CTA.CSS}
              Title={CTA.Title}
              Type={CTA.Type}
              Icon={CTA.Icon}
            />
          )}
          </div>
        </div>
      </div>
    </section>
  );
}



