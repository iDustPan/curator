
import _ from 'lodash'
import {
	FETCH_ALL_MERCHANTS,
	SELECT_MERCHANT
 } from '../actions/MerchantsCreators';

export const merchants = (state = {
	merchantList: [],
	selectMerchant: {}
}, action) => {
	switch (action.type) {
		case FETCH_ALL_MERCHANTS:
			const newState =  {...state, merchantList: action.payload.data.merchants};
			console.log(newState);
			return newState;
			break;
		case SELECT_MERCHANT:
			return {...state, selectMerchant: action.payload};
		default:
	}
	return state;
}
