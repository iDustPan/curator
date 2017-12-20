import axios from 'axios';

const url = 'https://5thave-prod.bybieyang.com/api/v1/brands?f=0&t=1000';

export const FETCH_ALL_BRANDS = 'FETCH_ALL_BRANDS';
export const SELECT_BRAND = 'SELECT_BRAND';

export const fetchBrands = () => {
	return {
		type: FETCH_ALL_BRANDS,
		payload: axios.get(url)
	};
}

export const selectBrand = (selectBrands) => {
	return {
		type: SELECT_BRAND,
		payload: selectBrands
	};
}
