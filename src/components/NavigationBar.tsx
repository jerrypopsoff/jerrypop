import React from 'react';
import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';
import { NAVIGATION_MENU_ITEMS } from '../constants/navigation';

const NavigationBar: React.FC = () => {
  return (
    <>
      <DesktopNavigationBar navigationMenuItems={NAVIGATION_MENU_ITEMS} />
      <MobileNavigationBar navigationMenuItems={NAVIGATION_MENU_ITEMS} />
    </>
  );
};

export default NavigationBar;
