import React from 'react';
import {Image } from 'react-bootstrap';
import card from './card.css';
import {Link} from 'react-router-dom';
import Mycart from './Mycart';
import Values from './values';
import {ProductConsumer} from '../context';




class Card extends React.Component{

addcart=(value)=>{
  if(value.count[this.props.i]===0)
  return value.cart(this.props.i)

}


render(){

return(
<a href="#" className="link dim black b">

    <div className='br4  bw2  ajay ' >
    
      <ProductConsumer>{ (fact)=>(
        <div>
        <div className="profile-pic mb0 mr0 grow" id={this.props.i} onClick={()=>fact.handledetail()}>
        <Link to="/details" >
        <Image src={"assets/mobile"+this.props.i + ".jpg"} alt={`mobile${this.props.i}`} className="ajay2 grow" i={this.props.id} value={fact} />
        </Link>
        <div className="flex flex-column">
        {
         fact.count[this.props.i]>=1
          ?
            (<div className="edit"><a href="#" onClick={()=>{this.addcart(fact)}}><i className="fa fa-pencil fa-lg"><Link to='/mycart'><Image src="assets/incart.png" alt="cart" className="cart"/></Link></i></a></div>)
          :
          <ProductConsumer>{(value)=>
                (<div className="edit"><a href="#" onClick={()=>fact.cart(this.props.i)} ><i className="fa fa-pencil fa-lg"><Link to='/mycart'><Image src="assets/cart.jpg" alt="cart" className="cart"/></Link></i></a></div>)
          }</ProductConsumer>
        }
        <div className="yep"><b href="#"><i className="fa fa-pencil fa-lg"><Image src="assets/continue.png"h-50 w-50 alt="cart" /></i></b></div>
        </div>
        
        </div>
        <h className='flex justify-center  h5 ajay3 '>{this.props.name}</h>
        </div>
        )}
      </ProductConsumer>
        </div>
        
   
</a>




);
}	
}

export default Card;