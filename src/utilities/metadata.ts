import { Metadata } from 'next';

const TITLE = 'Jerrypop';
const DESCRIPTION =
  'Locally crafted San Francisco popcorn. Bold flavors. Compostable packaging.';

export function getMetadata(): Metadata {
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      type: 'website',
      url: 'https://jerrypop.com',
      siteName: TITLE,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
    },
  };
}
