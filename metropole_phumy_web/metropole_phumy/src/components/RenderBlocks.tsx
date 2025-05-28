// import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page as PageType} from '@/types/page'



const blockComponents: Record<string, React.FC<any>> = {}

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
          const { blockType } = block;
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <Block
                  {...block}
                  locale={locale}
                  disableInnerContainer
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
