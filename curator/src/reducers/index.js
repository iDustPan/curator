
import { combineReducers } from 'redux';
import { productReducer } from './ProductsReducer';
import { reducer as formReducer } from 'redux-form';
import { MerchantsReducer } from './FetchMerchantsReducer';
import { BrandsReducer } from './BrandsReducer';

const rootReducer = combineReducers({
    products: productReducer,
    form: formReducer,
    merchants: MerchantsReducer,
    brands: BrandsReducer,
});

export default rootReducer;
