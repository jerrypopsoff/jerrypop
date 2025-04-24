'use client';

import dynamic from 'next/dynamic';
import { useClickPop } from '../../hooks/use-click-pop';
import { useConsoleAsciiArt } from '../../hooks/use-console-ascii-art';
import { isProduction } from '../../utilities/environment';

const App = dynamic(() => import('../../components/App'), { ssr: false });

export function ClientOnly() {
  useClickPop();
  useConsoleAsciiArt();

  return <App />;
}
