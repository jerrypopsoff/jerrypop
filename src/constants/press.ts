import { PressArticle } from '../types/press-article';
import AppleNewsArticleImage from '../images/press-apple-news.png';
import AppleNewsArticleImageWebp from '../images/press-apple-news.webp';
import RsiNewsArticleImage from '../images/press-rsi-news.png';
import RsiNewsArticleImageWebp from '../images/press-rsi-news.webp';
import WashingtonPostArticleImage from '../images/press-washington-post.png';
import WashingtonPostArticleImageWebp from '../images/press-washington-post.webp';

export const ARTICLES: PressArticle[] = [
  {
    date: '29 March 2023',
    href: 'https://www.rsi.ch/play/tv/telegiornale/video/telegiornale?urn=urn:rsi:video:16135075&startTime=1766',
    image: RsiNewsArticleImage,
    imageAltText: 'Photograph of Jerry giving an interview for RSI News.',
    imageWebp: RsiNewsArticleImageWebp,
    publication: 'RSI News',
    title: 'Interview — Silicon Valley in crisis',
  },
  {
    date: '2 March 2023',
    href: 'https://open.spotify.com/episode/0zsDuYSOaTM0EEhpXpF86n?si=EmA6Y_UZQvi1r8aPj8iHTw&t=367',
    image: AppleNewsArticleImage,
    imageAltText:
      'Close-up photograph of infused oil being ladled onto popcorn in a stainles steel mixing bowl.',
    imageWebp: AppleNewsArticleImageWebp,
    publication: 'Apple News',
    title: 'Feature — Apple News Today',
  },
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
