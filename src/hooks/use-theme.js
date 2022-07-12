import { useEffect, useState } from 'react';

export function useTheme(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      'style',
      `--main-theme-dark: ${theme.mainThemeDark};
       --main-theme-medium: ${theme.mainThemeMedium};
       --text-highlight: ${theme.textHighlight};
    `,
    );
  }, [theme]);

  return [theme, setTheme];
}
