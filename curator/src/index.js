
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import appStore from './store/index';
import NavigationBar from './components/NavigationBar';
import ProductDetail from './containers/ProductDetail';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Hello from './components/hello';

ReactDom.render (
    <Provider store={appStore}>
        <Router>
            <div>
                <NavigationBar />
                <Route exact path="/" component={App} />
                <Route exact path="/products" component={Hello} />
                <Route path="/products/:id" component={ProductDetail} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('container')
);
