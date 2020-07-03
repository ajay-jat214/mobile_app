import React from 'react';
import CartList from './cartlist';
import {ProductConsumer} from '../context';
import CardDetails from './carddetails';
import Empty from './empty';
import Final from './final';




export default class Mycart extends React.Component{  


loadPaymentDataHandler=()=>{

} 	


 render(){
	return(
		<ProductConsumer>{(state)=>(
            
			state.mycart.length>0
			?
			 (
			  <div className="mt5">
			  <div className=" tc f-headline lh-solid link dim black i-ns flex flex-row flex justify-center"><div className="gray">your</div> <div className="blue">cart</div></div>
			  <CardDetails id={state.id}/>
			  <CartList id={state.id}/>
			  <Final id={state.id} total={state.total} />
			  </div>
			  )
			 :
			 <div className="mt5">
			 	<Empty />
			 </div>
		
		    )}
		</ProductConsumer>
		);
	
}
}

