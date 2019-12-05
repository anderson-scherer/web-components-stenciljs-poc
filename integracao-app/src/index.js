import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyPolyfills, defineCustomElements } from '@andersonscherer/web-components-uni/loader';

ReactDOM.render(<App />, document.getElementById('root'));

applyPolyfills().then(() => {
    defineCustomElements(window);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
