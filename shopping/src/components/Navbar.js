import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Navbar,Form,Nav,Button} from 'react-bootstrap';
import Contact from './Contact';
import Mycart from './Mycart';
import Productlist from './productlist';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context' ;

export default class navbar extends React.Component{
    
    SaveCart=(count,total,mycart,rate,values)=>{
      //event.preventDefault();
      for(let i=0;i<10;i++){
        rate[i]=count[i]*values[i].rate+count[i]*values[i]*0.18
        console.log(rate[i])
      }
      //console.log( count,'ye h count buddy')
      fetch('http://localhost:3001/logout',{
      method:'post',
      headers:{Authentication:'Content-Type:application/json'},
      body:JSON.stringify({
              email:this.props.email,
              total:total,
              count:count,
              mycart:mycart,
              rate:rate
              })
    })
    .then(res=>res.json())
    .then(user=>{

        alert(user)
      
    })
    .catch(err=>console.log('error occurred'))


    }

render(){
return(
<ProductConsumer>{
  (state)=>(
  <div className="black fixed top-0 w-100 z-1" >
    <Navbar bg="dark" variant="dark" >
      <Navbar.Brand href="/contact"><Link to="/contact">Contact  </Link></Navbar.Brand>
      <Nav className="mr-auto">
        <Navbar.Brand href="/"><Link to="/">Products  </Link></Navbar.Brand>
      </Nav>
      <Form inline>
        <Navbar.Brand href="/mycart"><Link to="/mycart"><Button variant="outline-info">🛒 My Cart</Button></Link></Navbar.Brand>
      </Form>
      <Form inline>
        <Navbar.Brand href="/"><Button variant="outline-info" onClick={(event)=>this.SaveCart(state.count,state.total,state.mycart,state.rate,state.Values)} >LogOut</Button></Navbar.Brand>
      </Form>
    </Navbar>
    
  </div>
  )
}
</ProductConsumer>

);
}
}