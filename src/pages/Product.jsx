import React from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';

const Product=function(props){
	let addToCart=()=>props.addtocart(props.product)
	return <div className="list-group-item">
						<div className="info">
							<div className="title">
								<big>{props.product.title}</big> <span className="badge">{props.product.code}</span>
							</div>
							<br/>
							<span onClick={e=>addToCart()} className="add-to-cart-btn">add to cart</span>
						</div>
						<div className="price">
							<strong>£{props.product.price}</strong>
						</div>
			</div>
					
}

const mapStateToProps=state=>state
export default connect(mapStateToProps,actions)(Product);
