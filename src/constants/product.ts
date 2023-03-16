import HabaneroRanchPhotograph from '../images/product-habanero-ranch.jpg';
import HabaneroRanchPhotographWebp from '../images/product-habanero-ranch.webp';
import PbjPhotograph from '../images/product-pbj.jpg';
import PbjPhotographWebp from '../images/product-pbj.webp';
import ChiopotleCheddarPhotograph from '../images/product-chipotle-cheddar.jpg';
import ChiopotleCheddarPhotographWebp from '../images/product-chipotle-cheddar.webp';
import ChocolateHazelnutEspressoPhotograph from '../images/product-chocolate-hazelnut-espresso.jpg';
import ChocolateHazelnutEspressoPhotographWebp from '../images/product-chocolate-hazelnut-espresso.webp';
import GoatCheeseChivePhotograph from '../images/product-goat-cheese-chive.jpeg';
import GoatCheeseChivePhotographWebp from '../images/product-goat-cheese-chive.webp';
import RosemaryLemonPepperPhotograph from '../images/product-rosemary-lemon-pepper.jpeg';
import RosemaryLemonPepperPhotographWebp from '../images/product-rosemary-lemon-pepper.webp';
import SichuanNoochPhotograph from '../images/product-sichuan-nooch.jpeg';
import SichuanNoochPhotographWebp from '../images/product-sichuan-nooch.webp';
import FurikakeDashiPhotograph from '../images/product-furikake-dashi.jpeg';
import FurikakeDashiPhotographWebp from '../images/product-furikake-dashi.webp';
import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    allergens: ['MILK'],
    description:
      'Hulless and crisp popcorn coated in creamy, zesty ranch seasoning with a habanero kick. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Habanero Ranch',
  },
  {
    allergens: ['PEANUTS', 'SOY'],
    description:
      'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'PB&J',
  },
  {
    allergens: ['MILK'],
    description:
      'The perfect combination of smoky chipotle, tangy cheddar, and zesty lime. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Chipotle Cheddar',
  },
  {
    allergens: ['MILK'],
    description:
      'Creamy, tangy goat milk popcorn with abundant chives for a delicate, herbal finish. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Goat Cheese Chive',
  },
  {
    allergens: ['FISH (TUNA)', 'MILK'],
    description:
      'A tastefully savory umami bomb featuring nori furikake, bonito stock, and shichimi togarashi. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Furikake Dashi',
  },
  {
    allergens: [],
    description:
      'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Rosemary Lemon Pepper',
  },
  {
    allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
    description:
      'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with hazelnut and espresso. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Chocolate Hazelnut Espresso',
  },
  {
    allergens: [],
    description:
      'Toasted sichuan peppercorn and nutritional yeast shine in this exceptionally tingly, tangy, and funky popcorn for the thrill-seekers. Locally popped, handcrafted, and packaged in a compostable bag.',
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
    subtitle: 'Craft Popcorn',
    title: 'Sichuan Nooch',
  },
];
