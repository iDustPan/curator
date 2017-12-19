
import React, { Component } from 'react';
import rootReducer from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select, { Async } from 'react-select';
import { selectMerchant, fetchMerchants } from '../actions/MerchantsCreators'

class Option extends Component {

	constructor(props) {
		super(props);
		this.onSelectMerchant = this.onSelectMerchant.bind(this);
	}

    componentDidMount() {
        this.props.fetchMerchants();
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
		if (this.props.merchants.length == 0) {
			return <div>loading...</div>;
		}
		const options = this.renderOptions();
		return (
            <div className={this.props.field.className}>
                <label>{ this.props.field.label }</label>
                <Select
                    multi
    				value={ this.props.selectedMerchant }
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
		 selectedMerchant: state.merchants.selectMerchant
	 };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectMerchant, fetchMerchants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
