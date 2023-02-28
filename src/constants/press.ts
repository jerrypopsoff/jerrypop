import { PressArticle } from '../types/press-article';
import WashingtonPostArticleImage from '../images/press-washington-post.png';
import WashingtonPostArticleImageWebp from '../images/press-washington-post.webp';

export const ARTICLES: PressArticle[] = [
  {
    date: '27 February 2023',
    href: 'https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/',
    image: WashingtonPostArticleImage,
    imageAltText:
      'Jerry Haagsma serves his popcorn, Jerrypop, at an event at Harmonic Brewing in San Francisco on February 18 2023.',
    imageWebp: WashingtonPostArticleImageWebp,
    publication: 'The Washington Post',
    title: 'Even before the layoffs, tech workers were quitting. Here’s why.',
  },
];
