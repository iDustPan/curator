
import {
    SEARCH_PRODUCTS,
    PREPARE_SEARCH,
    FETCH_PRODUCT_DETAIL
} from '../actions/ProductsCreators';
import _ from 'lodash';

export function productReducer(state = {
    products: {},
    hasMore: true,
    total: 0,
    timeOut: false,
    cursor: '',
    previousSearch: {
        values: {},
        selectedBrands:[],
        selectedMerchants:[],
        index:0
    }
}, action) {

    switch (action.type) {
        case SEARCH_PRODUCTS:
            const { products, hasMore, total, timeOut, cursor } = action.payload.data;
            let newProducts;
            if (state.previousSearch.index == 0) {
                newProducts = _.mapKeys(products, 'id');
            }else{
                newProducts = _.assign(state.products, _.mapKeys(products, 'id'));
            }
            return { ...state,
                products: newProducts,
                hasMore,
                timeOut,
                cursor,
                total
            };
            break;
        case PREPARE_SEARCH:
            return {...state, previousSearch: action.payload };
        case FETCH_PRODUCT_DETAIL:
            const newProduct = action.payload.data;
    		return {
                ...state,
                products: {...state.products, [newProduct.id]: newProduct}
            };
    			break;
        default:
    }
    return state;
}
