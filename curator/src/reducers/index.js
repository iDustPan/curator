
import { combineReducers } from 'redux';
import { searchReducer } from './SearchProductsReducer';
import { reducer as formReducer } from 'redux-form';
import { MerchantsReducer } from './FetchMerchantsReducer';
import { BrandsReducer } from './BrandsReducer';
import { ProductDetailReducer } from './ProductDetailReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    form: formReducer,
    merchants: MerchantsReducer,
    brands: BrandsReducer,
    product: ProductDetailReducer
});

export default rootReducer;
