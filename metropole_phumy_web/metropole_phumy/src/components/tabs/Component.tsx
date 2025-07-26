import { cn } from "@/utilities/cn";
import { BlockTabs as TabsComponentProps } from "./config";

import '@/assets/styles/components/gallery.css';
import { Media } from "@/components/media";
import HeadingText from "@/components/heading/Component";
import RichText from "@/components/rte/RichText";
import { Tabs as TabsWrapper,  TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GalleryComponent } from "../gallery/Component";
import { CTAComponent } from "../cta/Component";
import { ApartmentComponent } from "../apartment/Component";
import { BlockCardsComponent } from "../cards/Component";

export interface Props extends TabsComponentProps {
  locale: string;
}

export function BlockTabsComponent(props: Props) {
  const { locale, Heading, SubHeading, Setting, Description, Tabs, } = props;

  // console.log(Rows);

  return (
    <section className={cn(
      Setting?.CSS || "",
      `section-content section-tabs`
    )} data-locale={locale} style={{
      backgroundColor: Setting?.BackgroundColor || "transparent",
      color: Setting?.TextColor || "inherit",
    }} {...Setting?.htmlID ? {id:Setting?.htmlID}:{}}>
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
            <div className="tabslist-wrapper">
              <TabsList className="mx-auto justify-center bg-transparent text-[#282828] mb-6">
              {
                Tabs && Tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.Name.toLowerCase()} className="data-[state=active]:shadow-none data-[state=active]:font-bold font-normal px-4 py-2 leading-normal md:px-6 md:py-3 tab-button">
                    {tab.Title}
                  </TabsTrigger>
                ))
              }
              </TabsList>
            </div>
            {
              Tabs && Tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.Name.toLowerCase()}>
                  {
                    tab.Gallery && (
                      <GalleryComponent {...tab.Gallery} locale={locale}></GalleryComponent>
                    )
                  }
                  {
                    !tab.Gallery && tab.Photos && (
                      <div className="tab-photos">
                        {
                          tab.Photos.map((photo) => (
                            <Media resource={photo} key={photo.id} className="photo"></Media>
                          ))
                        }
                      </div>
                    )
                  }
                  {
                    tab.CTA && (
                      <div className="flex justify-center py-8">
                        <CTAComponent
                        key={tab.CTA.id}
                        id={tab.CTA.id}
                        Slug={tab.CTA.Slug}
                        Target={tab.CTA.Target}
                        CSS={tab.CTA.CSS}
                        Title={tab.CTA.Title}
                        Type={tab.CTA.Type}
                        Icon={tab.CTA.Icon}
                      />
                      </div>
                    )
                  }
                  {
                    tab.Apartments && (
                      <ApartmentComponent locale={locale} {...tab.Apartments} popup={tab.PopupCTAs}></ApartmentComponent>
                    )
                  }
                  {
                    tab.Card && (
                      <BlockCardsComponent locale={locale} {...tab.Card}></BlockCardsComponent>
                    )
                  }
                </TabsContent>
              ))
            }
          </TabsWrapper>
        </div>
      </div>
    </section>
  );
}