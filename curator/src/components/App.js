import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMerchants } from '../actions/MerchantsCreators';
import { fetchBrands } from '../actions/BrandsCreators';
import ProductsList from '../containers/ProductsList';

class App extends Component {
    render() {
        return (
            <div className='gray-back'>
                <SearchForm />
                <ProductsList />
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchMerchants();
        this.props.fetchBrands();
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMerchants, fetchBrands }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
