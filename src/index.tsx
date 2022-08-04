import './app.css';
import App from './components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeClickPop } from './utilities/click-pop';
import { logAsciiArt } from './utilities/console-ascii-art';
import { reportWebVitals, sendToAnalytics } from './report-web-vitals';

initializeClickPop(document);
logAsciiArt();

createRoot(document.getElementById('root') as HTMLElement).render(<App />);

reportWebVitals(sendToAnalytics);
