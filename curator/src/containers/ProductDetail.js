import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/ProductsCreators';
import Loading from '../components/Loading';
import ProductName from './productName';
import BannerSlider from '../components/Slider';
import _ from 'lodash';

class ProductDetail extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchProduct(id);
	}

	render() {
		const { product } = this.props;
		const images = product.images;
		return (<div className='prd_detail_container'>
			<BannerSlider images={images} className='col-md-8 mx-auto'/>
			<ProductName product={product} className='pt-2'/>
		</div>);
	};
}

function mapStateToProps(state, ownProps) {
	return {
        product: state.products.products[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchProduct})(ProductDetail);
