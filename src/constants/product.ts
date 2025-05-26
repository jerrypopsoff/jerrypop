import HabaneroRanchPhotograph from '../images/product-habanero-ranch.png';
import PbjPhotograph from '../images/product-pbj.png';
import ChiopotleCheddarPhotograph from '../images/product-chipotle-cheddar.png';
import ChocolateHazelnutEspressoPhotograph from '../images/product-chocolate-hazelnut-espresso.png';
import MalaLimePhotograph from '../images/product-mala-lime.png';
import GoatCheeseChivePhotograph from '../images/product-goat-cheese-chive.png';
import RequestAFlavorPhotograph from '../images/product-request-a-flavor.png';
import RosemaryLemonPepperPhotograph from '../images/product-rosemary-lemon-pepper.png';
import SichuanNoochPhotograph from '../images/product-sichuan-nooch.png';
import FurikakeDashiPhotograph from '../images/product-furikake-dashi.png';
import { RetailProduct, Product, CateringProduct } from '../types/product';
import { INSTAGRAM_PROFILE_URL } from './url';

export const PRODUCT_IMAGE_WIDTH_PX = 240;

export const HABANERO_RANCH: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Hulless and crisp popcorn coated in creamy, zesty ranch seasoning with a habanero kick.',
  image: HabaneroRanchPhotograph.src,
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
    'BLACK PEPPER',
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
  image: PbjPhotograph.src,
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

export const CHIPOTLE_CHEDDAR: CateringProduct = {
  allergens: ['MILK'],
  description:
    'The perfect combination of smoky chipotle, tangy cheddar, and zesty lime.',
  image: ChiopotleCheddarPhotograph.src,
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
    'BLACK PEPPER',
  ],
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Chipotle Cheddar',
  weight: '1.7 OZ',
};

export const GOAT_CHEESE_CHIVE: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Creamy, tangy goat milk popcorn with abundant chives for a delicate, herbal finish.',
  image: GoatCheeseChivePhotograph.src,
  ingredients: [
    'NON-GMO POPCORN',
    'NON-GMO SUNFLOWER OIL',
    'GOAT MILK POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'CANE SUGAR',
    'CHIVES',
    'BLACK PEPPER',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Goat Cheese Chive',
  weight: '1.7 OZ',
};

export const FURIKAKE_DASHI: RetailProduct = {
  allergens: ['SESAME', 'TUNA'],
  description:
    'A tastefully savory umami bomb featuring nori furikake, smoked bonito tuna, and shichimi togarashi.',
  image: FurikakeDashiPhotograph.src,
  ingredients: [
    'NON-GMO POPCORN',
    'NON-GMO SUNFLOWER OIL',
    'SESAME SEED',
    'SALT',
    'SEAWEED',
    'SHICHIMI TOGARASHI',
    'CANE SUGAR',
    'DRIED SMOKED SKIPJACK TUNA',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Furikake Dashi',
  weight: '1.7 OZ',
};

export const ROSEMARY_LEMON_PEPPER: RetailProduct = {
  allergens: [],
  description:
    'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper.',
  image: RosemaryLemonPepperPhotograph.src,
  ingredients: [
    'NON-GMO POPCORN',
    'NON-GMO SUNFLOWER OIL',
    'NON-GMO EXTRA VIRGIN OLIVE OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'CANE SUGAR',
    'ROSEMARY',
    'CRYSTALLIZED LEMON',
    'BLACK PEPPER',
  ],
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Rosemary Lemon Pepper',
  weight: '1.7 OZ',
};

export const CHOCOLATE_HAZELNUT_ESPRESSO: CateringProduct = {
  allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with hazelnut and espresso. This variety is only available in unmarked packaging.',
  image: ChocolateHazelnutEspressoPhotograph.src,
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
  image: MalaLimePhotograph.src,
  ingredients: [
    'NON-GMO POPCORN',
    'NON-GMO SUNFLOWER OIL',
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
  image: MalaLimePhotograph.src,
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
    'BLACK PEPPER',
    'OREGANO',
  ],
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Italian Sausage',
  weight: '1.7 OZ',
};

export const SICHUAN_NOOCH: CateringProduct = {
  allergens: [],
  description:
    'Toasted Sichuan peppercorn and nutritional yeast shine in this exceptionally tingly, tangy, and funky popcorn.',
  image: SichuanNoochPhotograph.src,
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
  subtitle: 'Craft Popcorn',
  title: 'Sichuan Nooch',
  weight: '1.7 OZ',
};

export const REQUEST_A_FLAVOR: CateringProduct = {
  allergens: [],
  description: `Request one or more flavors. See <a href="${INSTAGRAM_PROFILE_URL}" rel="noreferrer" target="_blank">@craftpopcorn</a> for inspiration. Price and net weight may vary. Available in unmarked packaging or custom packaging with additional cost and lead time.`,
  image: RequestAFlavorPhotograph.src,
  ingredients: [],
  priceCatering: { max: 12, min: 7 },
  subtitle: 'Craft Popcorn',
  title: 'Request a Flavor',
  weight: '1.7 - 3.7 OZ',
};

export const CATERING_PRODUCTS: CateringProduct[] = [
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
  REQUEST_A_FLAVOR,
];

export const PRODUCTS: Product[] = [
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
];

export const RETAIL_PRODUCTS: RetailProduct[] = [
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
];
