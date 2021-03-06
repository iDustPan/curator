
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import appStore from './store/index';
import NavigationBar from './components/NavigationBar';
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
                <Route path="/products" component={Hello} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('container')
);
