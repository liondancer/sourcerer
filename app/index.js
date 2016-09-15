// Set of features in ES6 that babel cannot transpile. So for those, you need babel-polyfill
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// browserHistory handles history --> nice clean URLs
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import CSS
import './styles/styles.css'; // Webpack can import CSS files too!

import configureStore from "./store/configureStore";
import { Provider } from 'react-redux';

//
const store = configureStore();

render(
    // Provider attaches my app to the redux  store
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    document.getElementById('app')
);
