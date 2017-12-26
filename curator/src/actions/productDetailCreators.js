import axios from 'axios';
import { ROOT_URL } from '../API';

export const FETCH_PRODUCT_DETAIL = 'fetch_product_detail';

export const fetchProduct = (productId) => {

	const request = axios.get();

	return {
		type: FETCH_PRODUCT_DETAIL,

	};
}
