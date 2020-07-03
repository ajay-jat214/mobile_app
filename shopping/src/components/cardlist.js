import React,{Component} from 'react';
import Values from './values';
import Card from './card';
import {Route,Link} from 'react-router-dom';
import Clickchange from './Mycart';
import Mycart from './Mycart';
import {ProductConsumer} from '../context';


 class Cardlist extends Component{
    

    // onComponentChange=(states,com)=>{
        
    //     let obj=<Link to='/mycart'></Link>
    //     return obj;
    // }


    onRouteChange=(states,ide,com)=>{
       
        this.setState({states:states});
        this.setState({id:ide});
        //this.setState({com:com});
   
  
        //this.onComponentChange(this.state.states,this.state.com);
  
    }


	render(){

		let j=1;
		return(
	    Values.map((users,i)=>{

               return(
                     <ProductConsumer >{(value)=>(
                      value.states==='mycart'
                      ?<Route path='/mycart' component={Mycart} />
	                  :
    	                  <div className="mx-100 h-auto w-auto felx justify-center pa6 right-2 dib  ma2 mb0 h-50" onClick={()=>value.handledetail(i)}>
                               
                               <Card
                               key={i} 
                               i={i} 
                               name={Values[i].name}
                               features={Values[i].features}
                               rate={Values[i].rate[i]}
                               states={value.states}
                               onRouteChange={this.onRouteChange}
                               />

                           </div>
                        )}</ProductConsumer>

                      );
               
               }
  )

		
		);
	}

}

export default  Cardlist;