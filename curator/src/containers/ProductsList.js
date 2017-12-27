import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroller';
import { searchProducts, prepareSearch } from '../actions/ProductsCreators';

class ProductsList extends Component {

	constructor(props) {
		super(props);
		this.loadingMore = this.loadingMore.bind(this);
	}

	componentDidMount() {

	}

	renderProductItem(products) {
        return _.map(products, (product) => {
            console.log(product);
            return (
                <ProductItem product={product} 	key={product.id} />
            );
        });
	}

	loadingMore(page) {
		const searchParams = this.props.searchResult.previousSearch;
		searchParams.index = page-1;
		this.props.searchProducts(searchParams);
	}

	render() {
		const { searchResult } = this.props;
		// if (!searchResult.products.length) {
		// 	return (<Loading />);
		// }
		const hasMore = searchResult.hasMore;
		const productItems = this.renderProductItem(searchResult.products);
		return (
			<InfiniteScroll
                className='mx-auto'
                pageStart={0}
                loadMore={this.loadingMore}
                hasMore={hasMore}
                loader={<Loading />}>

                <div className="row product-list mx-auto">
                    { productItems }
                </div>
            </InfiniteScroll>
		);
	}
}

function mapStateToProps(state) {
	return { searchResult: state.products };
}

export default connect(mapStateToProps, { searchProducts, prepareSearch })(ProductsList);
