import DesktopNavigationBarContent from './DesktopNavigationBarContent';
import MobileNavigationBarContent from './MobileNavigationBarContent';
import { NAVIGATION_MENU_ITEMS } from '../constants/navigation';

export default function NavigationBar() {
  return (
    <nav>
      <DesktopNavigationBarContent
        navigationMenuItems={NAVIGATION_MENU_ITEMS}
      />
      <MobileNavigationBarContent navigationMenuItems={NAVIGATION_MENU_ITEMS} />
    </nav>
  );
}
