// import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page as PageType} from '@/types/page'
import { RTEComponent } from '@/components/rte/Component'
import { GalleryComponent } from '@/components/gallery/Component';



const blockComponents: Record<string, React.FC<any>> = {
  "content.rte": RTEComponent,
  "content.gallery": GalleryComponent,
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
