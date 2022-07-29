import './app.css';
import App from './components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeClickPop } from './utilities/click-pop';
import { logAsciiArt } from './utilities/console-ascii-art';

initializeClickPop(document);
logAsciiArt();

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element not found in document');
}

createRoot(rootElement).render(<App />);
