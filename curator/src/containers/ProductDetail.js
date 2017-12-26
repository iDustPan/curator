
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/productDetailCreators';
import Loading from '../components/Loading';
import ProductName from './productName';

class ProductDetail extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchProduct(id);
	}

	render() {
		const product = this.props.product;
		if (product == {}) {
			return <Loading />;
		}
		console.log(product);
		return (
			<div className='prd_detail_container'>
				<ProductName product={product} />
			</div>
		);
	};
}

function mapStateToProps(state) {
	return { product: state.product };
}

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
