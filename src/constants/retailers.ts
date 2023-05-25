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
    products: [GOAT_CHEESE_CHIVE, HABANERO_RANCH],
  },
  // {
  //   address: '466 Haight Street',
  //   href: 'https://nickiesbarsf.com/',
  //   name: 'Nickieʼs',
  //   products: [GOAT_CHEESE_CHIVE],
  // },
  {
    address: '1050 26th Street',
    href: 'http://harmonicbrewing.com/',
    name: 'Harmonic Brewing',
    products: [GOAT_CHEESE_CHIVE, HABANERO_RANCH],
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
    products: [CHIPOTLE_CHEDDAR, HABANERO_RANCH, SICHUAN_NOOCH],
  },
];
