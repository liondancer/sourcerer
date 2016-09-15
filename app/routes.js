import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/home/homePage';
import App from './components/app';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
    </Route>
);