// import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page as PageType} from '@/types/page'
import { RTEComponent } from '@/components/rte/Component'
import { GalleryComponent } from '@/components/gallery/Component';
import { BlockCardsComponent } from '@/components/cards/Component';
import { BlockMapComponent } from '@/components/cards/Map';
import { BlockTableComponent } from '@/components/table/Component';
import { BlockListingComponent } from '@/components/listing/Component';
import { BlockFormComponent } from '@/components/form/Component';
import { BlockTabsComponent } from '@/components/tabs/Component';
import { BlockLogoVideoComponent } from '@/components/logos/Component';
import { FloatingMenu } from '@/components/floating/Component';


const blockComponents: Record<string, React.FC<any>> = {
  "content.rte": RTEComponent,
  "content.gallery": GalleryComponent,
  "content.block-cards": BlockCardsComponent,
  "content.block-map": BlockMapComponent,
  "content.block-table": BlockTableComponent,
  "content.block-listing": BlockListingComponent,
  "content.block-form": BlockFormComponent,
  "content.block-tabs": BlockTabsComponent,
  "content.block-logo-video": BlockLogoVideoComponent,
  "menus.floating-menu": FloatingMenu
}

export const RenderBlocks: React.FC<{
  blocks: PageType['layout'];
  locale?: string;
}> = (props) => {
  const { blocks, locale = "vi" } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const blockType = block.__component;
          // if (blockType === 'content.block-tabs') {
          //   console.log(block)
          // }
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];
            if (Block) {
              return (
                <Block
                  {...block}
                  locale={locale}
                  key={index}
                />
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
