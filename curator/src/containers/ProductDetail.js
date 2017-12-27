
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct, clearProduct } from '../actions/productDetailCreators';
import Loading from '../components/Loading';
import ProductName from './productName';
import BannerSlider from '../components/Slider';
import _ from 'lodash';

class ProductDetail extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchProduct(id);
	}

  componentWillUnmount() {
    const { product, match } = this.props;
    this.props.clearProduct(product);
  }

	render() {
		const { product, match } = this.props;
    const { id } = match.params;

		if (product == {} ) {
			return <Loading />;
		}
    console.log('----------------');
    console.log(product);
    const images = product.images;
    console.log(images);
		return (
			<div className='prd_detail_container'>
        <BannerSlider images={images} className='col-md-8 mx-auto'/>
        <ProductName product={product} className='pt-2' />
			</div>
		);
	};
}

function mapStateToProps(state) {

	return {
     product: state.product
   };
}

export default connect(mapStateToProps, { fetchProduct, clearProduct })(ProductDetail);
