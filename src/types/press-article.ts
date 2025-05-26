import { StaticImageData } from 'next/image';

export interface PressArticle {
  date: string;
  href: string;
  image: StaticImageData;
  imageAltText: string;
  publication: string;
  title: string;
}
