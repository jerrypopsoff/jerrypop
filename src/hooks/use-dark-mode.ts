import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function useDarkMode() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Present in light mode until mounted on client to prevent hydration errors.
  return { isDarkMode: mounted && resolvedTheme === 'dark' };
}
