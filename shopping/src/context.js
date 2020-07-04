import React from 'react';
import {Values} from './components/values';

const ProductContext=React.createContext();

class ProductProvider extends React.Component{
  constructor(){
    super()
         this.state={
           Values:Values,
           id:'',
           states:'idk',
           count:[0,0,0,0,0,0,0,0,0,0],
           mycart:[],
           rate:[0,0,0,0,0,0,0,0,0,0],
           total:0,
         }
   }

   SetState=(data)=>{
    if(data){
    let p=[0,0,0,0,0,0,0,0,0,0];
    for(let i of data.count){

      if(data.count[i]!=0){
      let price;
      //console.log(data.mycart[i],'asli bharat ')
      if(data.mycart[i]){
      if(data.mycart[i].rate[i]){
         price=data.mycart[i].rate[i]*data.count[i]+data.mycart[i].rate[i]*data.count[i]*0.18;
      }

      data.rate[i]=data.mycart[i].rate*data.count[i]
      this.setState({rate:data.rate})
      this.forceUpdate();
      console.log(this.state.rate);
      //console.log(data.rate,'ye h asli data.rate')
      p[i]=price;
      //console.log(p[i])
     
     
     this.setState({name:data.mycart[i].name});
     this.setState({id:data.id});
     
     
    }
     //console.log(this.state.rate,'salpaad')
   }
   }
   //this.setState({rate:p});
   this.setState({mycart:data.mycart});
   this.setState({count:data.count});
   this.setState({total:data.total});
 }
 }


  oncheck=async (id)=>{
    await this.setState({id:id});
    //console.log(this.state.id,'ye h context ki updated id ')
  }



		handledetail=async (id)=>{
      
      await this.setState({id:id});
		}



deduct=async (id)=>{
  if(this.state.count[id]>=1){
         --this.state.count[id];
         //console.log(this.state.count[id],'ye h updated count')
         this.state.Values[id].count=this.state.count[id];
         this.forceUpdate();
         //console.log(this.state.Values[id].count,'the rrrrooocffffkkkkkkkkkkk')
         this.state.rate[id]=(this.state.Values[id].rate*this.state.count[id]);
         this.forceUpdate();
         //console.log('kya sahi me zero hogaaya kya bhailog',this.state.rate[id]);
         let total=this.state.total-this.state.Values[id].rate*1.18;
         this.setState({total:total});
         this.forceUpdate();
         //console.log(this.state.total,'badshaah hoon mein baby badshah ban ke rahunga swag mera billo tenu jeen na deve')
         if(this.state.count[id]===0){
                   this.remove(id,this.state.states);
                   console.log('aataa hyachi satakli');
                   //console.log(id);
                }
                console.log(this.state.total)
        }
}

    increment=async (id)=>{
   
       ++this.state.count[id];
       this.state.Values[id].count=this.state.count[id];
       this.state.rate[id]=(this.state.Values[id].rate*this.state.count[id]);
       this.forceUpdate();

       let total=this.state.total+this.state.Values[id].rate*1.18;
       this.setState({total:total});
       this.forceUpdate();
       //console.log(this.state.id,id,this.state.total,'badshaah hoon mein baby badshah ban ke rahunga swag mera billo tenu jeen na deve')

     console.log(this.state.total)
    }



    fun=(item,no)=>{
        if(item)
          return item.id!==no;
         }



    remove=async (no,state)=>{

      //let mycart=this.state.mycart;
      
      // this.state.mycart=this.state.mycart.filter(item=>this.fun(item,no));
      // this.forceUpdate();

      this.state.mycart[no]='';
      this.forceUpdate();
      console.log(this.state.mycart)
      //this.setState({mycart:mycart});
      //this.forceUpdate();

       // for(let i in this.state.rate){
       //  this.state.total=this.state.total+this.state.rate[i];
       // }
       
      this.state.total=this.state.total-this.state.Values[no].rate*1.18*this.state.count[no];
      this.forceUpdate();
      //console.log(this.state.total)
      this.state.rate[no]=0
      this.forceUpdate();

      this.state.count[no]=0;
      this.forceUpdate();


      this.state.Values[no].inCart=false;
      this.forceUpdate();
       
    }

    cart=async (id)=>{
      //const {mycart} =this.state;
      this.state.id=id;
      this.forceUpdate();
     this.state.Values[id].inCart=true;
     this.forceUpdate();
     this.state.count[id]=1;
     this.forceUpdate();


          // console.log(this.state.mycart)
           this.state.mycart[id]=this.state.Values[id];
           console.log(this.state.mycart)
           this.forceUpdate();
           
    ++this.state.Values[id].count;
     this.state.rate[id]=(this.state.Values[id].rate);    
     this.forceUpdate();
     this.state.total=0;
     this.forceUpdate();
     for(let i=0;i<=9;i++){
      console.log(this.state.mycart)
       if(this.state.mycart[i]){
              this.state.total=this.state.total+this.state.Values[i].rate*this.state.count[i]*1.18;
              this.forceUpdate();
            }}
     //this.state.total=this.state.total*1.18;
     this.forceUpdate();

     // for(let i in this.state.rate){
     //   console.log(this.state.rate[i])
     // }


       // console.log(this.state.total)
     //console.log(this.state.total)
     
    }

  render(){
  	return(
  		<ProductContext.Provider value={{
  			...this.state,
  			handledetail:this.handledetail,
        cart:this.cart,
        increment:this.increment,
        deduct:this.deduct,
        remove:this.remove,
        SetState:this.SetState,
        oncheck:this.oncheck
  		}}>
  		{this.props.children}
  		</ProductContext.Provider>
  		);
  }

}

const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer,ProductContext};