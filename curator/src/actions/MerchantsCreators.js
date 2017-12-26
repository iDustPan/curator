
import fetcher from '../API';

export const FETCH_ALL_MERCHANTS = 'FETCH_ALL_MERCHANTS';
export const SELECT_MERCHANT = 'SELECT_MERCHANT';

export const fetchMerchants = () => {
	return {
		type: FETCH_ALL_MERCHANTS,
		payload: fetcher.get('api/v1/merchants', '_all=true')
	};
}

export const selectMerchant = (selectMerchants) => {
	return {
		type: SELECT_MERCHANT,
		payload: selectMerchants
	};
}
