import HabaneroRanchPhotograph from '../images/product-habanero-ranch.jpg';
import HabaneroRanchPhotographWebp from '../images/product-habanero-ranch.webp';
import HabaneroRanchPackagingImage from '../images/packaging-habanero-ranch.png';
import HabaneroRanchPackagingImageWebp from '../images/packaging-habanero-ranch.webp';
import PbjPhotograph from '../images/product-pbj.jpg';
import PbjPhotographWebp from '../images/product-pbj.webp';
import PbjPackagingImage from '../images/packaging-pbj.png';
import PbjPackagingImageWebp from '../images/packaging-pbj.webp';
import ChiopotleCheddarPhotograph from '../images/product-chipotle-cheddar.jpg';
import ChiopotleCheddarPhotographWebp from '../images/product-chipotle-cheddar.webp';
import ChipotleCheddarPackagingImage from '../images/packaging-chipotle-cheddar.png';
import ChipotleCheddarPackagingImageWebp from '../images/packaging-chipotle-cheddar.webp';
import ChocolateHazelnutEspressoPhotograph from '../images/product-chocolate-hazelnut-espresso.jpg';
import ChocolateHazelnutEspressoPhotographWebp from '../images/product-chocolate-hazelnut-espresso.webp';
import ChocolateHazelnutEspressoPackagingImage from '../images/packaging-chocolate-hazelnut-espresso.png';
import ChocolateHazelnutEspressoPackagingImageWebp from '../images/packaging-chocolate-hazelnut-espresso.webp';
import GoatCheeseChivePhotograph from '../images/product-goat-cheese-chive.jpeg';
import GoatCheeseChivePhotographWebp from '../images/product-goat-cheese-chive.webp';
import GoatCheeseChivePackagingImage from '../images/packaging-goat-cheese-chive.png';
import GoatCheeseChivePackagingImageWebp from '../images/packaging-goat-cheese-chive.webp';
import RosemaryLemonPepperPhotograph from '../images/product-rosemary-lemon-pepper.jpeg';
import RosemaryLemonPepperPhotographWebp from '../images/product-rosemary-lemon-pepper.webp';
import RosemaryLemonPepperPackagingImage from '../images/packaging-rosemary-lemon-pepper.png';
import RosemaryLemonPepperPackagingImageWebp from '../images/packaging-rosemary-lemon-pepper.webp';
import SichuanNoochPhotograph from '../images/product-sichuan-nooch.jpeg';
import SichuanNoochPhotographWebp from '../images/product-sichuan-nooch.webp';
import SichuanNoochPackagingImage from '../images/packaging-sichuan-nooch.png';
import SichuanNoochPackagingImageWebp from '../images/packaging-sichuan-nooch.webp';
import FurikakeDashiPhotograph from '../images/product-furikake-dashi.jpeg';
import FurikakeDashiPhotographWebp from '../images/product-furikake-dashi.webp';
import FurikakeDashiPackagingImage from '../images/packaging-furikake-dashi.png';
import FurikakeDashiPackagingImageWebp from '../images/packaging-furikake-dashi.webp';
import { RetailProduct, Product } from '../types/product';

export const HABANERO_RANCH: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Hulless and crisp popcorn coated in creamy, zesty ranch seasoning with a habanero kick.',
  image: HabaneroRanchPhotograph,
  imageWebp: HabaneroRanchPhotographWebp,
  ingredients: [
    'POPCORN',
    'CANOLA OIL',
    'BUTTERMILK POWDER',
    'ONION POWDER',
    'GARLIC POWDER',
    'KOSHER SALT',
    'SUGAR',
    'MONOSODIUM GLUTAMATE',
    'GROUND HABANERO PEPPER',
    'DILL',
    'BLACK PEPPERCORN',
    'CHIVES',
    'PARSLEY',
  ],
  packagingImage: HabaneroRanchPackagingImage,
  packagingImageWebp: HabaneroRanchPackagingImageWebp,
  priceCatering: 6.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Habanero Ranch',
  weight: '1.7 OZ',
};

export const PBJ: Product = {
  allergens: ['PEANUTS', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia.',
  image: PbjPhotograph,
  imageWebp: PbjPhotographWebp,
  ingredients: [
    'STRAWBERRY JAM',
    'PEANUT BUTTER (ROASTED PEANUTS, SUGAR, HYDROGENATED VEGETABLE OIL (COTTONSEED, SOYBEAN AND RAPESEED OIL), SALT)',
    'POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'SUGAR',
    'BAKING POWDER',
    'KOSHER SALT',
  ],
  packagingImage: PbjPackagingImage,
  packagingImageWebp: PbjPackagingImageWebp,
  priceCatering: 10.0,
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
    'POPCORN',
    'CANOLA OIL',
    'CHEDDAR CHEESE POWDER (GRANULAR CHEESE (MILK, CHEESE CULTURE, SALT, ENZYMES), WHEY, SUNFLOWER OIL, WHEY PROTEIN CONCENTRATE, LACTOSE, MALTODEXTRIN, SALT, BLUE CHEESE (MILK, CHEESE CULTURE, SALT, ENZYMES), SODIUM PHOSPHATE, CITRIC ACID, LACTIC ACID, YELLOW 5, YELLOW 6)',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'KOSHER SALT',
    'CHIPOTLE POWDER',
    'MONOSODIUM GLUTAMATE',
    'SUGAR',
    'CRYSTALLIZED LIME (CITRIC ACID, LIME OIL, LIME JUICE, MALTODEXTRIN)',
    'BLACK PEPPERCORN',
  ],
  packagingImage: ChipotleCheddarPackagingImage,
  packagingImageWebp: ChipotleCheddarPackagingImageWebp,
  priceCatering: 6.0,
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
    'POPCORN',
    'CANOLA OIL',
    'GOAT MILK POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'KOSHER SALT',
    'MONOSODIUM GLUTAMATE',
    'SUGAR',
    'CHIVES',
    'BLACK PEPPERCORN',
  ],
  packagingImage: GoatCheeseChivePackagingImage,
  packagingImageWebp: GoatCheeseChivePackagingImageWebp,
  priceCatering: 6.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Goat Cheese Chive',
  weight: '1.7 OZ',
};

export const FURIKAKE_DASHI: RetailProduct = {
  allergens: ['MILK', 'SESAME', 'TUNA'],
  description:
    'A tastefully savory umami bomb featuring nori furikake, bonito stock, and shichimi togarashi.',
  image: FurikakeDashiPhotograph,
  imageWebp: FurikakeDashiPhotographWebp,
  ingredients: [
    'POPCORN',
    'CANOLA OIL',
    'NORI KOMI FURIKAKE (SESAME SEED, SUGAR, SEAWEED, SALT, MALTODEXTRIN, DISODIUM SUCCINATE, DISODIUM INOSINATE)',
    'KOSHER SALT',
    'BONITO SOUP STOCK (SALT, MONOSODIUM GLUTAMATE, LACTOSE (MILK), SUGAR, DRIED BONITO TUNA, DISODIUM INOSINATE, YEAST EXTRACT, BONITO TUNA BROTH, DISODIUM SUCCINATE, BONITO TUNA EXTRACT, XYLOSE, MALTOSE, DEXTROSE)',
    'MONOSODIUM GLUTAMATE',
    'SHICHIMI TOGARASHI (CHILI PEPPER, ORANGE PEEL, BLACK SESAME SEED, SEAWEED, WHITE SESAME SEED, JAPANESE PEPPER, GINGER)',
    'ONION POWDER',
    'SUGAR',
  ],
  packagingImage: FurikakeDashiPackagingImage,
  packagingImageWebp: FurikakeDashiPackagingImageWebp,
  priceCatering: 6.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Furikake Dashi',
  weight: '1.7 OZ',
};

export const ROSEMARY_LEMON_PEPPER: Product = {
  allergens: [],
  description:
    'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper. This variety is only available in unmarked packaging.',
  image: RosemaryLemonPepperPhotograph,
  imageWebp: RosemaryLemonPepperPhotographWebp,
  ingredients: [
    'POPCORN',
    'CANOLA OIL',
    'EXTRA VIRGIN OLIVE OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'KOSHER SALT',
    'SUGAR',
    'CRYSTALLIZED LEMON (CITRIC ACID, LEMON OIL, LEMON JUICE)',
    'ROSEMARY',
    'BLACK PEPPERCORN',
  ],
  packagingImage: RosemaryLemonPepperPackagingImage,
  packagingImageWebp: RosemaryLemonPepperPackagingImageWebp,
  priceCatering: 6.0,
  subtitle: 'Craft Popcorn',
  title: 'Rosemary Lemon Pepper',
  weight: '1.7 OZ',
};

export const CHOCOLATE_HAZELNUT_ESPRESSO: Product = {
  allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with hazelnut and espresso. This variety is only available in unmarked packaging.',
  image: ChocolateHazelnutEspressoPhotograph,
  imageWebp: ChocolateHazelnutEspressoPhotographWebp,
  ingredients: [
    'HAZELNUT SPREAD WITH COCOA (SUGAR, PALM OIL, HAZELNUTS, SKIM MILK, COCOA, LECITHIN, VANILLIN)',
    'POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'SUGAR',
    'BAKING POWDER',
    'KOSHER SALT',
  ],
  packagingImage: ChocolateHazelnutEspressoPackagingImage,
  packagingImageWebp: ChocolateHazelnutEspressoPackagingImageWebp,
  priceCatering: 10.0,
  subtitle: 'Craft Popcorn',
  title: 'Chocolate Hazelnut Espresso',
  weight: '3.4 OZ',
};

export const SICHUAN_NOOCH: RetailProduct = {
  allergens: [],
  description:
    'Toasted sichuan peppercorn and nutritional yeast shine in this exceptionally tingly, tangy, and funky popcorn for the thrill-seekers.',
  image: SichuanNoochPhotograph,
  imageWebp: SichuanNoochPhotographWebp,
  ingredients: [
    'POPCORN',
    'CANOLA OIL',
    'NUTRITIONAL YEAST (Dried Yeast, Niacin, Pyridoxine Hydrochloride (Vitamin B6), Thiamin Hydrochloride (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid (Vitamin B9), Cyanocobalamin (Vitamin B12))',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'KOSHER SALT',
    'SICHUAN PEPPERCORN',
    'MONOSODIUM GLUTAMATE',
    'SUGAR',
    'CRYSTALLIZED LIME (CITRIC ACID, LIME OIL, LIME JUICE, MALTODEXTRIN)',
  ],
  packagingImage: SichuanNoochPackagingImage,
  packagingImageWebp: SichuanNoochPackagingImageWebp,
  priceCatering: 6.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Sichuan Nooch',
  weight: '1.7 OZ',
};

export const PRODUCTS: Product[] = [
  HABANERO_RANCH,
  CHIPOTLE_CHEDDAR,
  GOAT_CHEESE_CHIVE,
  FURIKAKE_DASHI,
  SICHUAN_NOOCH,
  ROSEMARY_LEMON_PEPPER,
  PBJ,
  CHOCOLATE_HAZELNUT_ESPRESSO,
];

export const PRICED_PRODUCTS: RetailProduct[] = [
  HABANERO_RANCH,
  CHIPOTLE_CHEDDAR,
  GOAT_CHEESE_CHIVE,
  FURIKAKE_DASHI,
  SICHUAN_NOOCH,
];
