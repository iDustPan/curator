import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProducts, prepareSearch } from '../actions/SearchProductsCreators';

class Pagination extends Component {

    renderItem() {
        const itemsCount = this.props.itemsCount
        var items = [];
        for (var i = 0; i < itemsCount; i++) {
            const index = i+1;
            const item = (
                <li className="page-item" key={i} onClick={()=>this.onClickItem(index)}>
                    <a className="page-link">{i+1}</a>
                </li>
            );
            items[i] = item;
        }
        return items;
    }

    onClickItem(index) {
        const { values, selectedBrands, selectedMerchants } = this.props;
        this.props.prepareSearch({values, selectedBrands, selectedMerchants, index});
        this.props.searchProducts(values, {selectedBrands, selectedMerchants}, index);
    }

    onClickPrevious() {
        const { index, values, selectedBrands, selectedMerchants } = this.props;
        if (this.props.currentIndex - 1 > 0) {
            this.props.prepareSearch({ values, selectedBrands, selectedMerchants, index: index - 1 });
            this.props.searchProducts(values, {selectedBrands, selectedMerchants}, index - 1);
        }
    }

    onClickNext() {
        const { index, values, selectedBrands, selectedMerchants } = this.props;
        this.props.prepareSearch({ values, selectedBrands, selectedMerchants, index: index + 1 });
        this.props.searchProducts(values, {selectedBrands, selectedMerchants}, index + 1);
    }

    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={()=>this.onClickPrevious()}>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    { this.renderItem() }
                    <li className="page-item" onClick={()=>this.onClickNext()}>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return state.search.previousSearch;
}


export default connect(mapStateToProps, { searchProducts, prepareSearch })(Pagination);
