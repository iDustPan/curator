
import axios from 'axios';

const ROOT_URL = `https://5thave-prod.bybieyang.com/api/v2/discover`;
const PAGE_SIZE = 20;

export const PREPARE_SEARCH = "PREPARE_SEARCH";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const searchProducts = (values, { selectedMerchants, selectedBrands }, from) => {
	return {
		type: SEARCH_PRODUCTS,
		payload: searchBy(values, { selectedMerchants, selectedBrands }, from)
	};
}

export const prepareSearch = (searchParams) => {
    return {
        type: PREPARE_SEARCH,
        payload: searchParams
    };
}

function searchBy(values, { selectedMerchants, selectedBrands }, from) {
    let param = ``;
    console.log(values);

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

    // Search count
    param += `&f=${(from - 1) * PAGE_SIZE}&t=${ from * PAGE_SIZE }`;

    const url = `${ROOT_URL}?${param}`

    console.log(url);

    return axios.get(url);
}
