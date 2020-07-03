import React,{Component} from 'react';
import Values from './values';
import {ProductConsumer} from '../context';
import {Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Magnify from './magnifier';
import Magnifier from 'react-magnifier';




class Details extends Component{


	render(){
		return(
			<div className="w-50 flex justify center ">
			<ProductConsumer>
				{(state,value)=>  (         
				    <div className="mt5 h-100 w-auto-l flex flex-row dib">

				    <div className="w-100 flex justify center">
					
					<Magnify image={"assets/mobile"+state.id + ".jpg"} />
					</div>

					<div1 className="flex flex row flex justify center w-75">
                    <h className="f-headline lh-solid">{state.Values[state.id].name}</h>
					<div className="flex flex-row"><h className="silver i-ns link black dim db  pa2 f5 ">{Values[state.id].features}</h><h className="link yellow dim db  pa2  f4">₹{Values[state.id].rate}</h></div>
					<h >{Values[state.id].info}</h>

		<div className="flex items-center justify-center pa4">
		    <Link to='/'><a className="f6 fl hover-bg-green hover-white b--green link ba ph3 pv2 dib green br2 br--left" href="#0">Back to products</a></Link>
		    <Link to='/mycart'><a className="f6 fl hover-bg-yellow hover-white b--yellow link bb bt ph3 pv2 dib yellow br2 br--right br" href="#0" onClick={()=>{state.cart(state.id)}}>Add to Cart</a></Link>
		</div>

					</div1>

					</div>

							)
			    }
			
			</ProductConsumer>
			</div>


			);
	}
}

export default Details;
