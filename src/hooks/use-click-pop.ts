import { initializeClickPop } from '../utilities/click-pop';
import { useEffect } from 'react';

export function useClickPop() {
  useEffect(() => {
    initializeClickPop(document);
  }, []);
}
