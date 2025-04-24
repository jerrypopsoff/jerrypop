import { PressArticle } from '../types/press-article';
import AppleNewsArticleImage from '../images/press-apple-news.png';
import AppleNewsArticleImageWebp from '../images/press-apple-news.webp';
import CbsArticleImage from '../images/press-cbs-bay-area.jpeg';
import CbsArticleImageWebp from '../images/press-cbs-bay-area.webp';
import LocalishArticleImage from '../images/press-localish.jpg';
import LocalishArticleImageWebp from '../images/press-localish.webp';
import RsiNewsArticleImage from '../images/press-rsi-news.png';
import RsiNewsArticleImageWebp from '../images/press-rsi-news.webp';
import WashingtonPostArticleImage from '../images/press-washington-post.png';
import WashingtonPostArticleImageWebp from '../images/press-washington-post.webp';

export const ARTICLES: PressArticle[] = [
  {
    date: '19 May 2023',
    href: 'https://www.cbsnews.com/sanfrancisco/news/tech-employees-look-to-reinvent-themselves-amid-mass-layoffs/',
    image: CbsArticleImage.src,
    imageAltText:
      'Photograph of Jerry pouring salt into a batter bowl during craft popcorn production.',
    imageWebp: CbsArticleImageWebp.src,
    publication: 'CBS Bay Area',
    title:
      'From programmer to popcorn-popper, tech worker takes a leap of faith',
  },
  {
    date: '2 April 2023',
    href: 'https://abc7news.com/jerrypop-jerry-haagsma-handcrafted-popcorn-unique-bay-area/13037479/',
    image: LocalishArticleImage.src,
    imageAltText:
      'Photograph of Jerrypop craft popcorn spilling out of mason jars onto a wooden bartop.',
    imageWebp: LocalishArticleImageWebp.src,
    publication: 'ABC7 News',
    title: 'Jerrypop in San Francisco produces fun, zany popcorn',
  },
  {
    date: '29 March 2023',
    href: 'https://www.rsi.ch/news/mondo/La-Silicon-Valley-in-crisi-ostenta-ottimismo-16135462.html',
    image: RsiNewsArticleImage.src,
    imageAltText: 'Photograph of Jerry giving an interview for RSI News.',
    imageWebp: RsiNewsArticleImageWebp.src,
    publication: 'RSI News',
    title: 'Interview — Silicon Valley in Crisis Flaunts Optimism',
  },
  {
    date: '2 March 2023',
    href: 'https://open.spotify.com/episode/0zsDuYSOaTM0EEhpXpF86n?si=EmA6Y_UZQvi1r8aPj8iHTw&t=367',
    image: AppleNewsArticleImage.src,
    imageAltText:
      'Close-up photograph of infused oil being ladled onto popcorn in a stainles steel mixing bowl.',
    imageWebp: AppleNewsArticleImageWebp.src,
    publication: 'Apple News',
    title: 'Feature — Apple News Today',
  },
  {
    date: '27 February 2023',
    href: 'https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/',
    image: WashingtonPostArticleImage.src,
    imageAltText:
      'Jerry Haagsma serves his popcorn, Jerrypop, at an event at Harmonic Brewing in San Francisco on February 18 2023.',
    imageWebp: WashingtonPostArticleImageWebp.src,
    publication: 'The Washington Post',
    title: 'Even before the layoffs, tech workers were quitting. Here’s why.',
  },
];
