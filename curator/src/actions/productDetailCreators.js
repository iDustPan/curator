
import fetcher from '../API';
export const FETCH_PRODUCT_DETAIL = 'fetch_product_detail';

export const fetchProduct = (productId) => {

	return {
		type: FETCH_PRODUCT_DETAIL,
		payload: fetcher.get(`api/v1/products/${productId}`)
	};
}
