import React from 'react';
import CartItem from './cartitem';
import {ProductConsumer} from '../context';

class CartList extends React.Component{
	  
		render(){
		return(
			<ProductConsumer>{
				(state)=>(

               state.mycart.map((item,no)=>{
               	           if(item)   
               					return <CartItem key={no} item={item} state={state} no={no}/>
               					 }
	                   		)
						)}

			</ProductConsumer>     
			);
}	
}

export default CartList;