
import { combineReducers } from 'redux';
import { searchReducer } from './SearchProductsReducer';
import { reducer as formReducer } from 'redux-form';
import { merchants } from './FetchMerchantsReducer'

const rootReducer = combineReducers({
    search: searchReducer,
    form: formReducer,
    merchants: merchants
});

export default rootReducer;
