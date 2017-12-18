
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

const appStore = createStore(
    rootReducer,
    {},
    applyMiddleware(createLogger(), promise)
);

export default appStore;
