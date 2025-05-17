import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollToTopOnPathChange() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
