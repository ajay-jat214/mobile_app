import React from 'react';
import {ProductConsumer} from '../context';
import Values from './values';
import {Image} from 'react-bootstrap';
import './cartitem.css';

export default class CartItem extends React.Component{


	render(){
	  const {key ,item ,state, no}=this.props;
	  //console.log(state,'ab bata id',no,item)
		
          const {id}=item;
          //console.log(state.mycart[no],'iss item pe hoga changes')
          if(!id&&id!=0)
          	return null;
		return(
            <ProductConsumer>{(state)=>(           	
	            <div className="dib tr flex justify-between flex flex-row  tc i-l h5"> 
	             <div><Image className="ajay8" src={"assets/mobile"+id+".jpg"} alt={`${id}`} /></div>
	             <div className="pv5 ">{state.Values[id].name}</div>	
	             <div className="  hover-white b--green link mv5 ph3 pv2 dib green br2 w-20-m flex flex-row db">
	             <button title={no} className="hover-bg-black hover-white button" onClick={()=>{state.deduct(id);state.oncheck(id);}}>-</button>
	             <button className="hover-bg-black hover-white button disabled">{state.count[id]}</button>
	             <button title={no} className="hover-bg-black hover-white button" onClick={()=>{state.increment(id);state.oncheck(id);}}>+</button>
	             </div>
	             <div className="pv5 "><Image title={id} className="delete" src="assets/delete.png" alt="delete" onClick={()=>state.remove(id,state)}/></div>	             
	             <div className="pv5">{state.Values[id].rate*state.count[id]}</div>
	            </div>
            )}</ProductConsumer>
           
			);
}
}