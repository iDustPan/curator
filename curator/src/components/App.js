import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <SearchForm />
            </div>
        );
    }
}


export default App;
