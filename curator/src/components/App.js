import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMerchants } from '../actions/FetchMerchantsCreators';

class App extends Component {
    render() {
        return (
            <div>
                <SearchForm />
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchMerchants();
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchMerchants}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
