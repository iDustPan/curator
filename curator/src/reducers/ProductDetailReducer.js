
import {
	FETCH_PRODUCT_DETAIL
} from '../actions/productDetailCreators';

export const ProductDetailReducer = (state={}, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_DETAIL:
			return action.payload.data;
			break;
		default:
	}
	return state;
}
