import products from './products';
const intialState={
	products:products,
	cart:[] ,
	rules:[
		{code:"SR1",rule:"product.qty>=3?((product.qty)*product.price)-4.5:((product.qty)*product.price)"},
		{code:"GR1",rule:"product.qty>=2?((product.qty/2)*product.price):((product.qty)*product.price)"}

	]
}

const reducer=function(state=intialState,action){
	switch(action.type)
	{
		case "addtocart":
		let a=state.cart
		let product=action.payload
		if(a.some(item=>item.code===product.code))
		{
			return {
				...state,
				cart:state.cart.map(item=>item.code===product.code?({...item,qty:item.qty+1}):item)
			}
		}
		else
		{
			return {
				...state,
				cart:[...state.cart,{...product,qty:1,id:state.cart.length+1}]
			}	
		}
		default:
			return state
	}
}

export default  reducer;