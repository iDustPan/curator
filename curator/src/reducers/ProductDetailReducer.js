
import {
	FETCH_PRODUCT_DETAIL,
  CLEAR_PRODUCT
} from '../actions/productDetailCreators';

export const ProductDetailReducer = (state={}, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_DETAIL:
			return action.payload.data;
			break;
    case CLEAR_PRODUCT:
      return {};
		default:
	}
	return state;
}
