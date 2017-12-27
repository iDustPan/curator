
import React, { Component } from 'react';

const ProductName = ({product}) => {
	return (
		<div className='mt-5'>
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
