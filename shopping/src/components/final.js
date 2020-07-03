import React from 'react';
import {ProductConsumer} from '../context';
import {Values } from './values';


export default class Final extends React.Component{

   render(){ 
  

  return(
  	<ProductConsumer>{(state)=>(
  	  	<div className="mr0 f-headline lh-solid">Total:{state.total}</div>
  	)}</ProductConsumer>
  	);
}
}

