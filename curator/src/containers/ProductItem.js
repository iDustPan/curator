import React from 'react';

const ProductItem = ({ product }) => {

	const imgUrl = product.images[0].full.url;
	const productName = product.nameCN;
	const productId = product.id;

	return (
		<div className='card border-gray col-md-3 product-item'>
			<img className="card-img-top product-img" src={imgUrl} alt="Card image cap"/>
			<div className="card-body">
				<h5 className="card-title">{productName}</h5>
				<p className="card-text">{`Product ID:${productId}`}</p>
			</div>
		</div>
	);
}

export default ProductItem;
