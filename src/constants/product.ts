import HabaneroRanchPhotograph from '../images/product-habanero-ranch.png';
import HabaneroRanchPhotographWebp from '../images/product-habanero-ranch.webp';
import PbjPhotograph from '../images/product-pbj.png';
import PbjPhotographWebp from '../images/product-pbj.webp';
import ChiopotleCheddarPhotograph from '../images/product-chipotle-cheddar.png';
import ChiopotleCheddarPhotographWebp from '../images/product-chipotle-cheddar.webp';
import ChocolateHazelnutEspressoPhotograph from '../images/product-chocolate-hazelnut-espresso.png';
import ChocolateHazelnutEspressoPhotographWebp from '../images/product-chocolate-hazelnut-espresso.webp';
import MalaLimePhotograph from '../images/product-mala-lime.png';
import MalaLimePhotographWebp from '../images/product-mala-lime.webp';
import GoatCheeseChivePhotograph from '../images/product-goat-cheese-chive.png';
import GoatCheeseChivePhotographWebp from '../images/product-goat-cheese-chive.webp';
import RosemaryLemonPepperPhotograph from '../images/product-rosemary-lemon-pepper.png';
import RosemaryLemonPepperPhotographWebp from '../images/product-rosemary-lemon-pepper.webp';
import SichuanNoochPhotograph from '../images/product-sichuan-nooch.png';
import SichuanNoochPhotographWebp from '../images/product-sichuan-nooch.webp';
import FurikakeDashiPhotograph from '../images/product-furikake-dashi.png';
import FurikakeDashiPhotographWebp from '../images/product-furikake-dashi.webp';
import { RetailProduct, Product, CateringProduct } from '../types/product';
import { INSTAGRAM_PROFILE_URL } from './url';

export const PRODUCT_IMAGE_ASPECT_RATIO = 1.285;
export const PRODUCT_IMAGE_WIDTH_PX = 240;

export const HABANERO_RANCH: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Hulless and crisp popcorn coated in creamy, zesty ranch seasoning with a habanero kick.',
  image: HabaneroRanchPhotograph,
  imageWebp: HabaneroRanchPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'BUTTERMILK POWDER',
    'ONION POWDER',
    'GARLIC POWDER',
    'SALT',
    'CANE SUGAR',
    'MSG',
    'GROUND HABANERO PEPPER',
    'DILL',
    'BLACK PEPPERCORN',
    'CHIVES',
    'PARSLEY',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Habanero Ranch',
  weight: '1.7 OZ',
};

export const PBJ: CateringProduct = {
  allergens: ['PEANUTS', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia.',
  image: PbjPhotograph,
  imageWebp: PbjPhotographWebp,
  ingredients: [
    'STRAWBERRY JAM',
    'PEANUT BUTTER',
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'CANE SUGAR',
    'BAKING POWDER',
    'SALT',
    'CRYSTALLIZED LEMON',
  ],
  priceCatering: 12.0,
  subtitle: 'Craft Popcorn',
  title: 'PB&J',
  weight: '3.7 OZ',
};

export const CHIPOTLE_CHEDDAR: RetailProduct = {
  allergens: ['MILK'],
  description:
    'The perfect combination of smoky chipotle, tangy cheddar, and zesty lime.',
  image: ChiopotleCheddarPhotograph,
  imageWebp: ChiopotleCheddarPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'CHEDDAR CHEESE POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'GROUND CHIPOTLE PEPPER',
    'MSG',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
    'BLACK PEPPERCORN',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Chipotle Cheddar',
  weight: '1.7 OZ',
};

export const GOAT_CHEESE_CHIVE: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Creamy, tangy goat milk popcorn with abundant chives for a delicate, herbal finish.',
  image: GoatCheeseChivePhotograph,
  imageWebp: GoatCheeseChivePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GOAT MILK POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'MSG',
    'CANE SUGAR',
    'CHIVES',
    'BLACK PEPPERCORN',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Goat Cheese Chive',
  weight: '1.7 OZ',
};

export const FURIKAKE_DASHI: RetailProduct = {
  allergens: ['MILK', 'SESAME', 'TUNA'],
  description:
    'A tastefully savory umami bomb featuring nori furikake, smoked bonito tuna, and shichimi togarashi.',
  image: FurikakeDashiPhotograph,
  imageWebp: FurikakeDashiPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NORI KOMI FURIKAKE',
    'SALT',
    'BONITO SOUP STOCK',
    'MSG',
    'SHICHIMI TOGARASHI',
    'ONION POWDER',
    'CANE SUGAR',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Furikake Dashi',
  weight: '1.7 OZ',
};

export const ROSEMARY_LEMON_PEPPER: CateringProduct = {
  allergens: [],
  description:
    'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper. This variety is only available in unmarked packaging.',
  image: RosemaryLemonPepperPhotograph,
  imageWebp: RosemaryLemonPepperPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'EXTRA VIRGIN OLIVE OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'CANE SUGAR',
    'CRYSTALLIZED LEMON',
    'ROSEMARY',
    'BLACK PEPPERCORN',
  ],
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Rosemary Lemon Pepper',
  weight: '1.7 OZ',
};

export const CHOCOLATE_HAZELNUT_ESPRESSO: CateringProduct = {
  allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with hazelnut and espresso. This variety is only available in unmarked packaging.',
  image: ChocolateHazelnutEspressoPhotograph,
  imageWebp: ChocolateHazelnutEspressoPhotographWebp,
  ingredients: [
    'HAZELNUT SPREAD WITH COCOA (SUGAR, PALM OIL, HAZELNUTS, SKIM MILK, COCOA, LECITHIN, VANILLIN)',
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'CANE SUGAR',
    'BAKING POWDER',
    'SALT',
    'ESPRESSO POWDER',
  ],
  priceCatering: 12.0,
  subtitle: 'Craft Popcorn',
  title: 'Chocolate Hazelnut Espresso',
  weight: '2.8 OZ',
};

export const MALA_LIME: RetailProduct = {
  allergens: [],
  description:
    'Taking inspiration from San Francisco’s incredible landscape of Sichuan cuisine and Mexican chili-lime seasoning, this popcorn blasts your senses with fiery Sichuan chili pepper, numbing Sichuan peppercorn, and tangy lime.',
  image: MalaLimePhotograph,
  imageWebp: MalaLimePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GRANULATED GARLIC',
    'SICHUAN CHILI PEPPER',
    'ONION POWDER',
    'SALT',
    'SICHUAN PEPPERCORN',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Málà Lime',
  weight: '1.7 OZ',
};

export const ITALIAN_SAUSAGE: CateringProduct = {
  allergens: [],
  description:
    'The finest herbs and spices available capture the delicious flavors of my Sicilian grandmother’s signature Italian sausage pasta.',
  image: MalaLimePhotograph,
  imageWebp: MalaLimePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'FENNEL SEED',
    'EXTRA VIRGIN OLIVE OIL',
    'CANE SUGAR',
    'TOMATO POWDER',
    'CRUSHED RED PEPPER',
    'PAPRIKA',
    'SMOKED PAPRIKA',
    'BASIL',
    'BLACK PEPPERCORN',
    'OREGANO',
  ],
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Italian Sausage',
  weight: '1.7 OZ',
};

export const SICHUAN_NOOCH: RetailProduct = {
  allergens: [],
  description:
    'Toasted Sichuan peppercorn and nutritional yeast shine in this exceptionally tingly, tangy, and funky popcorn.',
  image: SichuanNoochPhotograph,
  imageWebp: SichuanNoochPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NUTRITIONAL YEAST',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'SICHUAN PEPPERCORN',
    'MSG',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Sichuan Nooch',
  weight: '1.7 OZ',
};

export const REQUEST_A_FLAVOR: CateringProduct = {
  allergens: [],
  description: `Request one or more flavors. See <a href="${INSTAGRAM_PROFILE_URL}" rel="noreferrer" target="_blank">@craftpopcorn</a> for inspiration. Price and net weight may vary. Available in unmarked packaging or custom packaging with additional cost and lead time.`,
  image: MalaLimePhotograph,
  imageWebp: MalaLimePhotographWebp,
  ingredients: [],
  priceCatering: { max: 12, min: 7 },
  subtitle: 'Craft Popcorn',
  title: 'Request a Flavor',
  weight: '1.7 - 3.7 OZ',
};

export const CATERING_PRODUCTS: CateringProduct[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
  REQUEST_A_FLAVOR,
];

export const PRODUCTS: Product[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
  ITALIAN_SAUSAGE,
  PBJ,
  CHOCOLATE_HAZELNUT_ESPRESSO,
];

export const RETAIL_PRODUCTS: RetailProduct[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
];
