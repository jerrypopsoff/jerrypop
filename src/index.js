import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeClickPop } from './utilities/click-pop';
import { logAsciiArt } from './utilities/console-ascii-art';

initializeClickPop(document);
logAsciiArt();

ReactDOM.render(<App />, document.getElementById('root'));
