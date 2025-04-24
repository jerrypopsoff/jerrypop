import { Metadata } from 'next';
import { DESCRIPTION, TITLE } from '../constants/metadata';

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
