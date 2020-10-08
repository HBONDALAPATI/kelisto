import React from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import Cartlistitem from './Cartlistitem';
import Total from './Total';
const Cart=function(props){
	return <div className="cart">
			<div className="box">
				{props.cart.map(item=>
					<Cartlistitem key={item.id} title={item.title} qty={item.qty} />
				)}
				<Total />
			</div>

		<button>Checkout now</button>
	</div>
}

const mapStateToProps=state=>state
export default connect(mapStateToProps,actions)(Cart);