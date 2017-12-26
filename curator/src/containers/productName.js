
import React, { Component } from 'react';

const ProductName = ({product}) => {
	return (
		<div>
			<div>
				{product.nameCN}
			</div>
			<div>
				{product.name}
			</div>
		</div>
	);
}

export default ProductName;
