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
    products: [CHIPOTLE_CHEDDAR, GOAT_CHEESE_CHIVE],
  },
  {
    address: '18 Harlan Place',
    href: 'https://www.harlanrecords.com/',
    name: 'Harlan Records',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI],
  },
  {
    address: '2245 3rd Street',
    href: 'https://www.olfactorybrewing.com/',
    name: 'Olfactory Brewing',
    products: [
      CHIPOTLE_CHEDDAR,
      FURIKAKE_DASHI,
      GOAT_CHEESE_CHIVE,
      HABANERO_RANCH,
      SICHUAN_NOOCH,
    ],
  },
  {
    address: '466 Haight Street',
    href: 'https://nickiesbarsf.com/',
    name: 'Nickieʼs',
    products: [GOAT_CHEESE_CHIVE],
  },
  // {
  //   address: '530 Haight Street',
  //   href: 'https://www.woodsbeer.com/lowside',
  //   name: 'Woods Lowside',
  //   products: [SICHUAN_NOOCH],
  // },
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
    address: '1400 Guerrero Street',
    href: 'https://www.instagram.com/26thandguerreromarket/',
    name: '26th & Guerrero Market',
    products: [FURIKAKE_DASHI, GOAT_CHEESE_CHIVE],
  },
  {
    address: '3394 22nd Street',
    href: 'https://www.instagram.com/lone_palm_bar/',
    name: 'Lone Palm Bar',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI, HABANERO_RANCH],
  },
  {
    address: '853 Valencia Street',
    href: 'https://www.citybeerstore.com/',
    name: 'City Beer Store',
    products: [FURIKAKE_DASHI],
  },
];
