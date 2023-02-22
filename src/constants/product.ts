import HrFrontLabel from '../images/jerrypop-hr-front-label.svg';
import HrPhotograph from '../images/hr-product-photograph.jpg';
import PbjFrontLabel from '../images/jerrypop-pbj-front-label.svg';
import PbjPhotograph from '../images/pbj-product-photograph.jpg';
import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    description:
      'Hulless and crisp popcorn smothered in creamy, zesty ranch seasoning with a habanero kick. Locally popped, handcrafted, and packaged in a fully compostable bag.',
    labelImage: HrFrontLabel,
    photograph: HrPhotograph,
    title: 'Habanero Ranch Craft Popcorn',
  },
  {
    description:
      'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia. Locally popped, handcrafted, and packaged in a fully compostable bag.',
    labelImage: PbjFrontLabel,
    photograph: PbjPhotograph,
    title: 'PB&J Craft Popcorn',
  },
];
