
import fetcher from '../API';

const PAGE_SIZE = 20;

export const PREPARE_SEARCH = "PREPARE_SEARCH";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const searchProducts = (searchParams) => {
	return {
		type: SEARCH_PRODUCTS,
		payload: searchBy(searchParams)
	};
}

export const prepareSearch = (searchParams) => {
    return {
        type: PREPARE_SEARCH,
        payload: searchParams
    };
}

function searchBy(searchParams) {
	const { values, selectedMerchants, selectedBrands, index } = searchParams;
    let param = ``;

	if (values != {}) {
		// Search By Product ID
	    if (values.productID) {
	        param += `pid=${values.productID}`;
	    }
	    // Search By label
	    if (values.label) {
	        param += `l=${values.label}`;
	    }
	    // Search By Price Range
	    const lowC = parseInt(values.lowRange) * 100;
	    const highC = parseInt(values.highRange) * 100;
	    if (lowC && highC) {
	        param += `pr=c${lowC}-${highC}`;
	    }

	    // Search By merchants id
	    selectedMerchants.map((merchant) => {
	        param = param + `m=${merchant.value}&`;
	    });

	    // Search By brands id
	    selectedBrands.map((brand) => {
	        param = param + `b=${brand.value}&`;
	    })
	}

    // Search count
    param += `&f=${index * PAGE_SIZE}&t=${ (index + 1) * PAGE_SIZE }`;

    return fetcher.get('api/v2/discover', param);
}
