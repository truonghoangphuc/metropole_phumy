import { Page as PageType } from '@/types/page';
import { API_URL } from '@/utilities/constant';
import { Description } from '@radix-ui/react-dialog';
import qs from 'qs';

export const getPageBySlug = async (slug: string, locale: string = 'vi'):Promise<PageType> => {

  const query = qs.stringify({
    filters: {
      Slug: {
        $eq: slug,
      },
      locale: {
        $eq: locale
      }
    },    
    populate: {
      MetaTag: {
        fields: ['Title', 'Description', 'Keywords']
      },
      OpenGraph: {
        fields: ['Title', 'type', 'url'],
        populate: {
          image: {
            fields: ['url', 'width', 'height']
          }
        }
      },
      Layout: {
        on: {
          'content.rte': {
            populate: {
              'Background': {
                populate: '*'
              },
              'CTAs': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              }
            }
          },
          'content.gallery': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'Photos': {
                populate: '*'
              },
              'Rows': {
                populate: {
                  Items: {
                    populate: '*'
                  }
                }
              }
            }
          },
          'content.block-cards': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },
              'Items': {
                populate: {
                  'BorderColor': {
                    populate: '*'
                  },
                  Image: {
                    populate: '*'
                  }
                }
              }
            }
          },
          'content.block-map': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },
              'Cards': {
                populate: {
                  'Icon': {
                    populate: '*'
                  }
                }
              },
              'Map': {
                populate: '*'
              },
              'MapBuilding': {
                populate: '*'
              }
            }
          },
          'content.block-table': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },
              'CTA': {
                populate: '*'
              },
              'Table': {
                populate: '*'
              },
              'Video': {
                populate: '*'
              },
              'VideoPoster': {
                populate: '*'
              }
            }
          },
          'content.block-listing': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },              
              'CTAs': {
                populate: '*'
              },
              'Listing': {
                populate: '*'
              },
              'Building': {
                populate: '*'
              },
            }
          },
          'content.block-form': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },              
              'Form': {
                populate: {
                  'Inputs': {
                    populate: '*'
                  },
                  'Setting': {
                    populate: '*'
                  }
                }
              },
            }
          },
          'content.block-tabs': {
            populate: {
              'Setting': {
                populate: '*'
              },
              'Heading': {
                populate: '*'
              },
              'SubHeading': {
                populate: '*'
              },
              'Tabs': {
                populate: {
                  'Icon': {
                    populate: '*',
                  },
                  'Gallery': {
                    populate: {
                      'Setting': {
                        populate: '*'
                      },
                      'Heading': {
                        populate: '*'
                      },
                      'Photos': {
                        populate: '*'
                      },
                      'Rows': {
                        populate: {
                          Items: {
                            populate: '*'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
        }
      }
    },
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  // console.log('query', query);

  const response = await fetch(`${API_URL}/api/pages?${query}`);
  const result = await response.json();
  const data = result.data[0] || {};
  
  const page: PageType = {
    title: data.Title,
    slug: data.Slug,
    metaTag: {
      title: data?.MetaTag?.Title,
      description: data?.MetaTag?.Description,
      keywords: data?.MetaTag?.Keywords
    },
    openGraph: {
      title: data.OpenGraph?.Title || '',
      type: data.OpenGraph?.type || '',
      url: data.OpenGraph?.url || '',
      image: data.OpenGraph?.image || null
    },
    layout: data.Layout,
    documentId: data.documentId,
    id: data.id,
    createdAt: data.createdAt,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt
  }

  return page;
}