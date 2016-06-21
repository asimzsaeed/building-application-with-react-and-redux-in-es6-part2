/**
 * Created by asimz on 20/06/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './app';
import HomePage from './components/home';
import AboutPage from './components/about';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path ="about" component={AboutPage} />
    </Route>
);
