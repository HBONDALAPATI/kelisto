import React from 'react';
import Basket from './Basket';
import Cart from './Cart';
const ProductsList=function(){
	return <div className="container">
			<Basket />	
			<Cart/>
	</div>
}

export default ProductsList;