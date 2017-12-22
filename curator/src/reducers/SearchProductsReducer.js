
import { SEARCH_PRODUCTS, PREPARE_SEARCH } from '../actions/SearchProductsCreators';

export function searchReducer(state = {
    products: [],
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
                newProducts = products;
            }else{
                newProducts = state.products.concat(products);
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
        default:
    }
    return state;
}
