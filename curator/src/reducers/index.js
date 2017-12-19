
import { combineReducers } from 'redux';
import { searchReducer } from './SearchProductsReducer';
import { reducer as formReducer } from 'redux-form';
import { MerchantsReducer } from './FetchMerchantsReducer'

const rootReducer = combineReducers({
    search: searchReducer,
    form: formReducer,
    merchants: MerchantsReducer
});

export default rootReducer;
