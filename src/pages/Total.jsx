import React from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';

let scanner=function(cart,rules,product){
	let price=0

	for(let i=0;i<rules.length;i++)
	{
		if(rules[i].code===product.code)
		{
			price=eval(rules[i].rule)
		}
	}
	return price
}	


const Total=function(props){

	let a=props.cart

	a=a.map(item=>{return {...item,price:scanner(props.cart,props.rules,item)}})

	let total=a.length>0?a.map(x=>x.price).reduce((s,n)=>s+n):0
	return <div className="total">
					<div className="title">Total</div>
					<div className="qty">£{total}</div>
				</div>


}


const mapStateToProps=state=>state
export default connect(mapStateToProps,actions)(Total);