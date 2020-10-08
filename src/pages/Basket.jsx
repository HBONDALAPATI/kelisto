import React from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import Product from './Product';
const Basket=function(props){
	return <div className="basket">
			<h1>List of products</h1>
			<small>showing all data</small>
			<div className="list-group">
				{props.products.map(product=>
					<Product key={product.code} product={product} />					
				)}
			</div>
	</div>
}

const mapStateToProps=state=>state
export default connect(mapStateToProps,actions)(Basket);