
import axios from 'axios';

//https://5thave-prod.bybieyang.com/api/v2/discover?m=cb1be947-49c8-dfdb-bb6e-d56648ddded8&m=98d3cc00-5772-a89e-2744-b3ad74d3a2a4&pr=c0-61000&f=0&t=20

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const searchProducts = () => {
	return {
		type: SEARCH_PRODUCTS,
		payload: axios.get('https://5thave-prod.bybieyang.com/api/v2/discover?m=cb1be947-49c8-dfdb-bb6e-d56648ddded8&m=98d3cc00-5772-a89e-2744-b3ad74d3a2a4&pr=c0-61000&f=0&t=20')
	};
}
