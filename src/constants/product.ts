import HrPhotograph from '../images/habanero-ranch-product.jpg';
import PbjPhotograph from '../images/pbj-product.jpg';
import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    allergens: ['MILK'],
    description:
      'Hulless and crisp popcorn smothered in creamy, zesty ranch seasoning with a habanero kick. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'POPCORN',
      'CANOLA OIL',
      'BUTTERMILK POWDER',
      'ONION POWDER',
      'GARLIC POWDER',
      'SALT',
      'SUGAR',
      'MONOSODIUM GLUTAMATE',
      'GROUND HABANERO PEPPER',
      'DILL',
      'BLACK PEPPERCORN',
      'CHIVES',
      'PARSLEY',
    ],
    photograph: HrPhotograph,
    title: 'Habanero Ranch Craft Popcorn',
  },
  {
    allergens: ['PEANUTS', 'SOY'],
    description:
      'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'STRAWBERRY JAM',
      'PEANUT BUTTER (ROASTED PEANUTS, SUGAR, HYDROGENATED VEGETABLE OIL (COTTONSEED, SOYBEAN AND RAPESEED OIL), SALT)',
      'POPCORN',
      'CANOLA OIL',
      'NATURALLY REFINED ORGANIC COCONUT OIL',
      'SUGAR',
      'BAKING POWDER',
      'SALT',
    ],
    photograph: PbjPhotograph,
    title: 'PB&J Craft Popcorn',
  },
  {
    allergens: [],
    description:
      'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'POPCORN',
      'CANOLA OIL',
      'EXTRA VIRGIN OLIVE OIL',
      'GRANULATED GARLIC',
      'GRANULATED ONION',
      'SALT',
      '100% NATURAL LEMON POWDER',
      'SUGAR',
      'ROSEMARY',
      'BLACK PEPPERCORN',
    ],
    title: 'Rosemary Lemon Pepper Craft Popcorn',
  },
  {
    allergens: ['FISH', 'MILK'],
    description:
      'Tastefully savory umami bomb popcorn featuring nori furikake, bonito stock, and shichimi togarashi. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'POPCORN',
      'CANOLA OIL',
      'NORI KOMI FURIKAKE (SESAME SEED, SUGAR, SEAWEED, SALT, MALTODEXTRIN, DISODIUM SUCCINATE, DISODIUM INOSINATE)',
      'SALT',
      'BONITO SOUP STOCK (SALT, MONOSODIUM GLUTAMATE, LACTOSE (MILK), SUGAR, DRIED BONITO TUNA, DISODIUM INOSINATE, YEAST EXTRACT, BONITO TUNA BROTH, DISODIUM SUCCINATE, BONITO TUNA EXTRACT, XYLOSE, MALTOSE, DEXTROSE)',
      'MONOSODIUM GLUTAMATE',
      'SHICHIMI TOGARASHI (CHILI PEPPER, ORANGE PEEL, BLACK SESAME SEED, SEAWEED, WHITE SESAME SEED, JAPANESE PEPPER, GINGER)',
      'GRANULATED ONION',
      'SUGAR',
    ],
    title: 'Furikake Dashi Craft Popcorn',
  },
  {
    allergens: [],
    description:
      'Exceptionally tingly, tangy, and funky popcorn for the thrill-seekers. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'POPCORN',
      'CANOLA OIL',
      'NUTRITIONAL YEAST (Dried Yeast, Niacin, Pyridoxine Hydrochloride (Vitamin B6), Thiamin Hydrochloride (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid (Vitamin B9), Cyanocobalamin (Vitamin B12))',
      'GRANULATED GARLIC',
      'GRANULATED ONION',
      'SALT',
      'SICHUAN PEPPERCORN',
      'MONOSODIUM GLUTAMATE',
      'SUGAR',
      'CRYSTALLIZED LIME (CITRIC ACID, LIME OIL, LIME JUICE, MALTODEXTRIN)',
    ],
    title: 'Sichuan Nooch Craft Popcorn',
  },
  {
    allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
    description:
      'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with espresso. Locally popped, handcrafted, and packaged in a compostable bag.',
    ingredients: [
      'HAZELNUT SPREAD WITH COCOA (SUGAR, PALM OIL, HAZELNUTS, SKIM MILK, COCOA, LECITHIN, VANILLIN)',
      'POPCORN',
      'CANOLA OIL',
      'NATURALLY REFINED ORGANIC COCONUT OIL',
      'SUGAR',
      'BAKING POWDER',
      'SALT',
    ],
    title: 'Chocolate Hazelnut Espresso Craft Popcorn',
  },
];
