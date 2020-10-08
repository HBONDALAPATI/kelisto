This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Store
	actions.js
	index.js [store]
	reducer.js
	products.js-data source


	part of state are
	const intialState={
		products:products,
		cart:[] ,
		rules:[
			{code:"SR1",rule:"product.qty>=3?((product.qty)*product.price)-4.5:((product.qty)*product.price)"},
			{code:"GR1",rule:"product.qty>=2?((product.qty/2)*product.price):((product.qty)*product.price)"}

		]
	}


### Code Splitting
code is divided into 2 sections 
1-store	
	actions.js
	index.js [store]
	reducer.js
	products.js-data source

### Advanced Configuration

	for taxation rules in reducer 
	state is intialState
	where rules array can be given

	for writing rules important notes
	1:["code of product to be checked for applying the rule","any rule taking current item as product is assigned to price if evaluated"]



### Making a ResponsiveApp
for making is responsive we added media query
code below for that

@media (max-width:768px)
{
	body
	{
		margin:8px;
	}	
	.app .list-group-item
	{
		flex-flow: column;
	}
	.app .container .basket
	{
		width:50%;
	}
	.app .container .cart
	{
		width:50%;
		margin-left: 0%;

	}

	.badge
	{
		background: var(--body);
		padding: 4px;
		transform: translateX(0px);
	}

}		


###Thanks


created by Hari Bondalpati