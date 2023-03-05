import React from 'react';
import { MERCH_HREF } from '../constants/navigation';

const Merch: React.FC = () => {
  // Redirect to official merchandise store.
  window.location.href = MERCH_HREF;
  return null;
};

export default Merch;
