import { Retailer } from '../types/retailer';
import {
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
} from './product';

export const RETAILERS: Retailer[] = [
  {
    address: '298 Divisadero Street',
    href: 'http://www.thepagebar.com/',
    name: 'The Page',
    products: [CHIPOTLE_CHEDDAR, HABANERO_RANCH],
  },
  {
    address: '1050 26th Street',
    href: 'http://harmonicbrewing.com/',
    name: 'Harmonic Brewing',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI],
  },
  {
    address: '18 Harlan Place',
    href: 'https://www.harlanrecords.com/',
    name: 'Harlan Records',
    products: [FURIKAKE_DASHI],
  },
  {
    address: 'Cole Valley Market · 960 Cole Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [
      CHIPOTLE_CHEDDAR,
      FURIKAKE_DASHI,
      GOAT_CHEESE_CHIVE,
      HABANERO_RANCH,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: 'Cow Hollow Market · 2190 Union Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [
      CHIPOTLE_CHEDDAR,
      FURIKAKE_DASHI,
      GOAT_CHEESE_CHIVE,
      HABANERO_RANCH,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: 'North Beach Market · 580 Green Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [
      CHIPOTLE_CHEDDAR,
      FURIKAKE_DASHI,
      GOAT_CHEESE_CHIVE,
      HABANERO_RANCH,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: '853 Valencia Street',
    href: 'https://www.citybeerstore.com/',
    name: 'City Beer Store',
    products: [FURIKAKE_DASHI],
  },
  {
    address: '2545 24th Street',
    href: 'https://www.juniorbarsf.com/',
    name: 'Junior',
    products: [
      CHIPOTLE_CHEDDAR,
      FURIKAKE_DASHI,
      GOAT_CHEESE_CHIVE,
      HABANERO_RANCH,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: '858 Rhode Island Street',
    href: 'https://chiotrasgrocery.com/',
    name: 'Chiotras Grocery',
    products: [FURIKAKE_DASHI, GOAT_CHEESE_CHIVE, HABANERO_RANCH],
  },
  {
    address: '466 Haight Street',
    href: 'https://nickiesbarsf.com/',
    name: 'Nickieʼs',
    products: [GOAT_CHEESE_CHIVE, HABANERO_RANCH],
  },
  {
    address: '2801 22nd Street',
    href: 'https://www.geminibottlesf.com/',
    name: 'Gemini Bottle Co.',
    products: [
      CHIPOTLE_CHEDDAR,
      GOAT_CHEESE_CHIVE,
      FURIKAKE_DASHI,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: '179 West Portal Avenue',
    href: 'https://sherwoodsf.com/',
    name: 'The Sherwood SF',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI],
  },
];
