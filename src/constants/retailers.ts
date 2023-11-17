import { Retailer } from '../types/retailer';
import {
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
} from './product';

export const RETAILERS: Retailer[] = [
  {
    address: '298 Divisadero Street',
    href: 'http://www.thepagebar.com/',
    name: 'The Page',
    products: [HABANERO_RANCH, SICHUAN_NOOCH],
  },
  {
    address: '18 Harlan Place',
    href: 'https://www.harlanrecords.com/',
    name: 'Harlan Records',
    products: [SICHUAN_NOOCH],
  },
  {
    address: 'Cole Valley Market · 960 Cole Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI, HABANERO_RANCH, SICHUAN_NOOCH],
  },
  {
    address: 'Cow Hollow Market · 2190 Union Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI, HABANERO_RANCH, SICHUAN_NOOCH],
  },
  {
    address: 'North Beach Market · 580 Green Street',
    href: 'https://lukeslocal.com/',
    name: 'Lukeʼs Local',
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI, HABANERO_RANCH, SICHUAN_NOOCH],
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
    products: [CHIPOTLE_CHEDDAR, FURIKAKE_DASHI, HABANERO_RANCH, SICHUAN_NOOCH],
  },
  {
    address: '1168 Leavenworth Street',
    href: 'https://tahonamercado.com/',
    name: 'Tahona Mercado',
    products: [HABANERO_RANCH, SICHUAN_NOOCH],
  },
  {
    address: '179 West Portal Avenue',
    href: 'https://sherwoodsf.com/',
    name: 'The Sherwood SF',
    products: [FURIKAKE_DASHI, HABANERO_RANCH],
  },
  {
    address: '2245 3rd Street',
    href: 'https://www.olfactorybrewing.com/',
    name: 'Olfactory Brewing',
    products: [HABANERO_RANCH, SICHUAN_NOOCH],
  },
];
