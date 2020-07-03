import React from 'react';
import {ProductConsumer} from '../context';


class Signin extends React.Component {



  constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:'',
      data2:''
    }
  }

  componentDidUpdate(){
  	


      fetch('http://localhost:3001/cartmounting',{
      method:'post',
      headers:{Authentication:'Content-Type:application/json'},
      body:JSON.stringify({
              email:this.state.signInEmail,
      
              })
    })
    .then(response=>response.json())
    .then(data=>{
      //this.props.onStateChange(data[0]);
      this.state.data2=data[0];
      //this.props.onStateChange(this.state.data2,this.props.state)
      //console.log(this.state.data2,'kya backchodi h bhai')
    })



    
  	
  }


  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
  }

  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value})
  }

  onButtonSubmit= (response)=>{
      fetch('http://localhost:3001/account/signin',{
      method:'post',
      headers:{Authentication:'Content-Type:application/json'},
      body:JSON.stringify({
              email:this.state.signInEmail,
              password:this.state.signInPassword
              })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.message==='success'){
        this.props.onRouteChange('home');
        this.props.onEmailChange(data.email);
      }
      else{
        alert(data)
      }
    })
}


 
  render(){



    return(

      <ProductConsumer>{(state)=>(

       <article className="vh-100 br2 ba dark-gray b--black-10 mv8 w-50 mt6  mw10 center shadow-5">
       <main className="white pa4 black-80 ">
    <div className="measure center tc">
      <fieldset id="sign_up" className="ba b--transparent ">
        <legend  className="f4 fw6 ph0 mh0">Sign In</legend>  
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="glow:hover pa2 input-reset ba bg-white hover-bg-black hover-black w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onEmailChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-white hover-bg-black hover-black w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange={this.onPasswordChange}
           />
          
        </div>
  
      </fieldset>
      <div className="white">
        <input 
        className="black b ph3 pv2 input-reset ba b--white bg-white grow pointer f6 dib pointer" 
        type="submit" 
        value="Sign in" 
        onClick={()=>{this.onButtonSubmit();state.SetState(this.state.data2);}}
   
        />
      </div>
      <div>


      <icons />



      </div>
      <div className="white lh-copy mt3">
        <p onClick={()=>this.props.onRouteChange('Registers')} className="white f6 link dim black db pointer">Register</p>
  
      </div>
    </div>

  </main>
  </article>
  )}
  </ProductConsumer>
       );
  
  }
 }

 export default Signin;