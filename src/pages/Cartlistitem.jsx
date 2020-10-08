import React from 'react';

const Cartlistitem=function(props){
	return <div className="flex">
				<div className="title">{props.title}</div>
				<div className="qty">{props.qty}</div>
			</div>	


}

export default Cartlistitem;

