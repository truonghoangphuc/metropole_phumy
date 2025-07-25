import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Website chính thức của Chủ Đầu Tư dự án [Metropole Phú Mỹ/Khu phức hợp Metropole Phú Mỹ]. Metropole Phú Mỹ là dự án phức hợp cao cấp tọa lạc tại vị trí đắc địa của Phú Mỹ, TP.Hồ Chí Minh. Với quy mô lớn và thiết kế hiện đại, dự án hứa hẹn mang đến không gian sống đẳng cấp và cơ hội đầu tư sinh lời bền vững.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Metropole Phu My',
  title: 'Metropole Phu My',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
