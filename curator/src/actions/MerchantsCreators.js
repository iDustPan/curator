
import axios from 'axios';

const url = 'https://5thave-prod.bybieyang.com/api/v1/merchants?_all=true'

export const FETCH_ALL_MERCHANTS = 'FETCH_ALL_MERCHANTS';
export const SELECT_MERCHANT = 'SELECT_MERCHANT';

export const fetchMerchants = () => {
	return {
		type: FETCH_ALL_MERCHANTS,
		payload: axios.get(url)
	};
}

export const selectMerchant = (merchant) => {
	return {
		type: SELECT_MERCHANT,
		payload: merchant
	};
}