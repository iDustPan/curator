
import { combineReducers } from 'redux';
import { searchReducer } from './reducer_products_search';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    search: searchReducer,
    form: formReducer
});

export default rootReducer;
