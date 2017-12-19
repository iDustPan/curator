
import React, { Component } from 'react';
import rootReducer from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select, { Async } from 'react-select';
import { selectMerchant } from '../actions/MerchantsCreators'

class Option extends Component {

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
        const options = this.renderOptions();
        const selectedMerchants = this.props.selectedMerchants;

		if (options.length == 0) {
			return <div>merchants loading...</div>;
		}
		return (
            <div className={this.props.field.className}>
                <label>{ this.props.field.label }</label>
                <Select
                    multi
    				value={ selectedMerchants }
    				onChange={ this.onSelectMerchant }
    				searchable={ true }
                    placeholder="Select your merchant"
    				options={ options }/>
            </div>
	   );
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

export default connect(mapStateToProps, mapDispatchToProps)(Option);
