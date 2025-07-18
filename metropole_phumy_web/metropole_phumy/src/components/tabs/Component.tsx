import { cn } from "@/utilities/cn";
import { BlockTabs as TabsComponentProps } from "./config";

import '@/assets/styles/components/gallery.css';
import { Media } from "@/components/media";
import HeadingText from "@/components/heading/Component";
import RichText from "@/components/rte/RichText";
import { Tabs as TabsWrapper,  TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GalleryComponent } from "../gallery/Component";

export interface Props extends TabsComponentProps {
  locale: string;
}

export function BlockTabsComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Description, Tabs} = props;

  // console.log(Rows);

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-tabs`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }}>
      <div className="container">
        {Heading && (
          <HeadingText heading={Heading} className="heading" />
        )}
        {SubHeading && (
          <HeadingText heading={SubHeading} className="heading" />
        )}
        <RichText content={Description} className="section-description"/>
        <div className="tabs-wrapper">
          <TabsWrapper defaultValue={Tabs[0].Name.toLowerCase()}>
            <TabsList className="mx-auto justify-center bg-transparent text-[#282828] mb-6">
            {
              Tabs && Tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.Name.toLowerCase()} className="bg-transparent data-[state=active]:shadow-none data-[state=active]:bg-[#E5F2F8] data-[state=active]:text-[#282828] dark:data-[state=active]:text-[#282828] text-base font-normal data-[state=active]:font-bold dark:data-[state=active]:bg-[#E5F2F8] px-4 py-2 leading-normal">
                  {tab.Title}
                </TabsTrigger>
              ))
            }
            </TabsList>
            {
              Tabs && Tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.Name.toLowerCase()}>
                  <GalleryComponent {...tab.Gallery} locale={locale}></GalleryComponent>
                </TabsContent>
              ))
            }
          </TabsWrapper>
        </div>
      </div>
    </section>
  );
}