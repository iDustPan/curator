import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {

	const imgUrl = product.images[0].full.url;
	const productName = product.nameCN;
	const productId = product.id;
	const linkPath = `/products/${productId}`;

	return (
		<div className='card border-gray col-md-3 product-item'>
			<Link to={linkPath}>
				<img className="card-img-top product-img" src={imgUrl} alt="Card image cap"/>
			</Link>
			<div className="card-body">
				<h5 className="card-title">{productName}</h5>
				<p className="card-text">{`Product ID:${productId}`}</p>
			</div>
		</div>
	);
}

export default ProductItem;
