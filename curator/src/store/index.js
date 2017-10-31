
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';

const appStore = createStore(
    rootReducer,
    {},
    applyMiddleware(createLogger())
);

export default appStore;
