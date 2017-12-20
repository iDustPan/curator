import React, { Component } from 'react';
import Option from '../components/Option';
import rootReducer from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMerchant } from '../actions/MerchantsCreators';
import { selectBrand } from '../actions/BrandsCreators';


class BrandsSelector extends Component {

    constructor(props) {
        super(props);
        this.onSelectBrands = this.onSelectBrands.bind(this);
    }

    renderOptions() {
		return this.props.brands.map((merchant) => {
			return { value: merchant.id, label: merchant.name };
		});
	}

	onSelectBrands(newVal) {
		this.props.selectBrand(newVal)
	}

    render() {
        const field = this.props.field;
        const placeholder = 'Select your brands';
        const options = this.renderOptions();
        const selectedValues = this.props.selectedBrands;

        return <Option
            field={field}
            placeholder={placeholder}
            onSelect={this.onSelectBrands}
            values={selectedValues}
            options={options} />;
    }
}

const mapStateToProps = (state) => {
	return {
		 brands: state.brands.brandList,
		 selectedBrands: state.brands.selectBrand
	 };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectBrand }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsSelector);
