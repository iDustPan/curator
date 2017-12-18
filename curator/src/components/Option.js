
import React, { Component } from 'react';
import rootReducer from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import { selectMerchant } from '../actions/MerchantsCreators'

class Option extends Component {

	constructor(props) {
		super(props);
		this.onSelectMerchant = this.onSelectMerchant.bind(this);
	}

	renderOptions() {
		console.log(`merchants = ${this.props.merchants}`);
		this.props.merchants.map((merchant) => {
			return { value: merchant.id, label: merchant.name };
		});
	}

	onSelectMerchant(newVal) {
		this.props.selectMerchant(newVal)
	}

	render() {
		if (this.props.merchants.length == 0) {
			return <div>loading...</div>;
		}
		const merchantsName = this.renderOptions();
		console.log(`merchantsName = ${merchantsName}`);
		return (
			<Select
				// className={this.props.field.className}
				name='merchant_select'
				value={ this.props.selectedMerchant }
				onChange={ this.onSelectMerchant }
				searchable={ true }
				options={merchantsName}
			/>
	   );
	}
}

const mapStateToProps = (state) => {
	console.log(`the state is ${state.merchants}`);
	return {
		 merchants: state.merchants.merchantList,
		 selectedMerchant: state.merchants.selectMerchant
	 };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectMerchant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
