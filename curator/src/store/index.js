
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const appStore = createStore(
    rootReducer,
    {},
    applyMiddleware(createLogger(), promise, thunk)
);

export default appStore;
