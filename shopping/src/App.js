import React,{Component} from 'react';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Mycart from './components/Mycart';
import Productlist from './components/productlist';
import Details from './components/Details';
import './App.css';
import Signin from './components/signin';
import {Link} from 'react-router-dom';
import Register from './components/register';
import Navigation from './components/navigation';
import {ProductConsumer} from './context';


export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      route:'home',
      isSignedIn:false,
      email:'',
      user:{
          id:'',
          firstname:'',
          lastname:'',
          email:''
          }
        }
      };


loaduser=(data)=>{

  this.setState({user:{
      id:data.id,
      firstname:data.firstname,
      lastname:data.lastname,
      email:data.email,
     
        }
      }
    );
}

onEmailChange=(email)=>{
  //console.log(email)
  this.setState({email:email});
}

onRouteChange=(route)=>{
  if(route==='Signouts'){
    this.setState({isSignedIn:false})
  }else if(route==='home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route});
}



  render()
  {

    return ( 

    
 
    this.state.route==='home'
            ?
        
            <div>
            <Navbar 
            onRouteChange={this.onRouteChange}
            email={this.state.email}

            />
                  <div className="bg-light-gray">
                  <Switch>
                    <Route path='/details' component={Details} />
                    <Route path='/mycart' component={Mycart} />
                    <Route  path='/contact' component={Contact} />
                    <Route path='/' component={Productlist} />
                  </Switch>
                  </div>    
            </div>
           
            :
            (
              this.state.route==='signin'
              ? 
              <ProductConsumer>{(state)=>(
              <div className='bgds'>
              <Navigation 
              onRouteChange={this.onRouteChange} 
              onEmailChange={this.onEmailChange}
              />
              <Signin 
              onRouteChange={this.onRouteChange} 
              onEmailChange={this.onEmailChange}
              count={state.count}
              rate={state.rate}
              mycart={state.mycart}
              total={state.total}
              state={state}
              onStateChange={this.onStateChange}
              /> 
            
              </div>
              )}</ProductConsumer>
              : 
              <div className='bgd'>
              <Navigation 
              onRouteChange={this.onRouteChange} 
              />
              <Register 
              loaduser={this.loaduser} 
              onRouteChange={this.onRouteChange} 
              onEmailChange={this.onEmailChange}
              />
              </div>

             
              )
           
                            
                            
 
         
        );
  }
}