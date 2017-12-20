
import { SEARCH_PRODUCTS, searchProducts } from '../actions/SearchProductsCreators';

export function searchReducer(state = {}, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return action.payload.data;
            break;
        default:
    }
    return state;
}
