import { NavigationMenuItem } from '../types/navigation';

export const NAVIGATION_MENU_ITEMS: NavigationMenuItem[] = [
  { displayName: 'Home', to: '/' },
  { displayName: 'Products', to: '/products' },
  { displayName: 'Order', to: '/order' },
  { displayName: 'About', to: '/about' },
  { displayName: 'Press', to: '/press' },
  {
    displayName: 'Merch',
    isExternal: true,
    to: 'https://www.bonfire.com/store/jerrypop',
  },
];
