import {
	FETCH_ALL_BRANDS,
	SELECT_BRAND
} from '../actions/BrandsCreators';

export const BrandsReducer = (state = {
	brandList: [],
	selectBrand: []
}, action) => {
	switch (action.type) {
		case FETCH_ALL_BRANDS:
			const newState =  {
                ...state,
                brandList: action.payload.data.brands
            };
			return newState;
			break;
		case SELECT_BRAND:
			return {
                ...state,
                selectBrand: action.payload
            };
		default:
	}
	return state;
}
