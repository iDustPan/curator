
import React, { Component } from 'react';
import Option from '../components/Option';
import rootReducer from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMerchant } from '../actions/MerchantsCreators'


class MerchantsSelector extends Component {

    constructor(props) {
        super(props);
        this.onSelectMerchant = this.onSelectMerchant.bind(this);
    }

    renderOptions() {
		return this.props.merchants.map((merchant) => {
			return { value: merchant.id, label: merchant.name };
		});
	}

	onSelectMerchant(newVal) {
		this.props.selectMerchant(newVal)
	}

    render() {
        const field = this.props.field;
        const placeholder = 'Select your merchants';
        const options = this.renderOptions();

        return <Option
            field={field}
            placeholder={placeholder}
            onSelect={this.onSelectMerchant}
            values={this.props.selectedMerchants}
            options={options} />;
    }
}

const mapStateToProps = (state) => {
	return {
		 merchants: state.merchants.merchantList,
		 selectedMerchants: state.merchants.selectMerchant
	 };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectMerchant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsSelector);
