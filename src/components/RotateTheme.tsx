import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Used to ensure theme rotation does not occur on initial page load, which
 * results in a noticeable screen flash. Storing this value via `useState` hook
 * causes re-invocation of the `useEffect` callback when toggling the value,
 * defeating the purpose.
 */
let hasIgnoredPageLoad = false;

interface Props {
  rotateTheme: () => void;
}

const RotateTheme: React.FC<Props> = ({ rotateTheme }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!hasIgnoredPageLoad) {
      hasIgnoredPageLoad = true;
      return;
    }

    rotateTheme();
  }, [pathname, rotateTheme]);

  return null;
};

export default RotateTheme;
