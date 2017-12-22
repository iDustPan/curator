import React, {Component} from 'react';
import {searchReducer} from '../reducers/SearchProductsReducer';
import {connect} from 'react-redux';

class ProductsList extends Component {

	renderProductItem(products) {
		return products.map((product, index) => {
			const imgUrl = product.images[0].full.url;
			const productName = product.nameCN;
			const productId = product.id;

			return (
				<div key={product.id} className='card border-gray col-md-3 product-item'>
					<img className="card-img-top product-img" src={imgUrl} alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">{productName}</h5>
						<p className="card-text">{`Product ID:${productId}`}</p>
					</div>
				</div>
			);
		});
	}

	render() {
		const { searchResult } = this.props;
        console.log(searchResult);
		if (!searchResult) {
			return <div>Loading...</div>;
		}
		return (
			<div className='row product-list'>
				{this.renderProductItem(searchResult.products)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {searchResult: state.search.result};
}

export default connect(mapStateToProps)(ProductsList);
