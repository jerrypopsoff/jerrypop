import { NavigationMenuItem } from '../types/navigation';

export const MERCH_HREF = 'https://www.bonfire.com/store/jerrypop';

export const NAVIGATION_MENU_ITEMS: NavigationMenuItem[] = [
  { displayName: 'Home', href: '/' },
  { displayName: 'Products', href: '/products' },
  { displayName: 'Catering', href: '/catering' },
  { displayName: 'About', href: '/about' },
  { displayName: 'Merch', isExternal: true, href: MERCH_HREF },
];
