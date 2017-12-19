
import {
	FETCH_ALL_MERCHANTS,
	SELECT_MERCHANT
} from '../actions/MerchantsCreators';

export const MerchantsReducer = (state = {
	merchantList: [],
	selectMerchant: {}
}, action) => {
	switch (action.type) {
		case FETCH_ALL_MERCHANTS:
			const newState =  {
                ...state,
                merchantList: action.payload.data.merchants
            };
			return newState;
			break;
		case SELECT_MERCHANT:
			return {
                ...state,
                selectMerchant: action.payload
            };
		default:
	}
	return state;
}
