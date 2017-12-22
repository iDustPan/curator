
import { SEARCH_PRODUCTS, PREPARE_SEARCH } from '../actions/SearchProductsCreators';

export function searchReducer(state = {
    result: null,
    previousSearch: {}
}, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, result: action.payload.data};
            break;
        case PREPARE_SEARCH:
            return {...state, previousSearch: action.payload };
        default:
    }
    return state;
}
