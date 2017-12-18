
import { FETCH_ALL_MERCHANTS, fetchMerchants } from '../actions/FetchMerchantsCreators';

export const merchants = (state = [], action) => {
	switch (action.type) {
		case FETCH_ALL_MERCHANTS:
			return action.payload.data;
			break;
		default:
	}
	return state;
}
