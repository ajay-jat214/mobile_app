const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
var User=require('./signin');
var Session=require('./userSession');
cors = require('cors');
app.use(cors());
var CartSchema=require('./cart');
const {MONGOURI}=require('./config/keys');

const PORT=process.env.PORT || 3001;

app.post('/cartmounting',(req,res)=>{

    let body=''
    req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
    
    
    const obj=JSON.parse(body);
    const {count,total,email,mycart,rate}=obj;

    User.find({
      email:email
    },(err,PreviousUser)=>{
      CartSchema.find({
        email:email
    },(err,cart)=>{
        console.log(cart,cart.mycart)
        res.json(cart);
    })


    })
  })

})




app.post('/logout',(req,res)=>{

    let body=''
    req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
    

    
    const obj=JSON.parse(body);
    const {count,total,email,mycart,rate}=obj;
    //console.log(total,count)  ;
   // console.log(count,total,email,mycart,rate)

    console.log(rate,'bettaaaa')
    User.find({
      email:email
    },(err,PreviousUser)=>{
      

      CartSchema.find({
        email:email
    },(err,previousCart)=>{
       
       if(previousCart.length>0){

        previousCart[0].deleteOne({_id:previousCart._id})
        
        const cart=new CartSchema();
        cart.total=total;
        cart.email=email;
        cart.count=count;
        cart.mycart=mycart;
        cart.rate=rate;
        cart.save({
            email:email,
            count:count,
            total:total,
            mycart:mycart,
            rate:rate
        })
        
       }
       else{
        const cart=new CartSchema();
        cart.total=total;
            cart.count=count;
            cart.email=email;
            cart.mycart=mycart;
                cart.save({
                    email:email,
                    total:total,
                    count:count,
                    mycart:mycart
                })
       }
    })

    // if(PreviousUser.length>0){


    // }
    // else{
        
    
          
    //         console.log(cart)
    //     }
   

    })


})
})

app.post('/account/signup',function(req,res){

    let body=''
    req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
    
    const obj=JSON.parse(body);

    const {firstname,lastname,password}=obj;
    let {email}=obj;

    console.log(firstname,password,lastname,email); 

	if(!firstname){
		return res.json(
			'error:firstname cannot be blank'
		)
	}

	if(!lastname){
		return res.json(
			'error:lastname cannot be blank'
		)
	}

	if(!password){
		return res.json(
			'error:password cannot be blank'
		)
	}

	if(!email){
		return res.json(
			'error:email cannot be blank'
		)
	}

		email=email.toLowerCase();

     User.find({
     	email:email
     },
     (err,previousUser)=>{
     	if(err){
     		return res.json(
     			'error1:server error'
     		)
     	}
        

     	 if(previousUser.length>0){
     		return res.json(
     			'error2:user already exists '
     		)
     	}
        
        const newUser=new User();
     	newUser.email=email;
     	newUser.password=newUser.generateHash(password);
     	console.log(newUser.password)
     	newUser.firstname=firstname;
     	newUser.lastname=lastname;

        newUser.save((err,user)=>{
        	if(err){
        	 return res.json(
        	 	'error3:server error'
        	 )
        	}

           return res.json({
            message:'success',
            email:email
        })
        
         


        })


})
    })
 })
 

app.post('/account/signin',(req,res)=>{
 
       
        let body=''
        req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
        
        const obj=JSON.parse(body)

  

	const {password}=obj;

	let {email}=obj;
    


	if(!password){
		return res.json(
			"error:password cannot be blank"
		)
	}

	if(!email){
		return res.json(
			'error:email cannot be blank'
		)
	}

		email=email.toLowerCase();
    User.find({
    	email:email
    },(err,users)=>{
    	if(err){
    	  return res.json(
  	      		'error:server error'
  	      		)
    	}

    	if(users.length!=1){
    		return res.json(
    			'error:Invalid user'
    		)
    	}

    	const  user=users[0];

    	if(!user.comparePassword(password)){
    		return res.json(
    			"password doesn't matched"
    		)
    	}

    	const userSession=new Session();
    	userSession.userId=user._id;
    	
    	userSession.save((err,doc)=>{
	    	if(err){
	    		return res.json(
	    			'error:server error'
	    		)
	    	} 
              
	    	return res.json({
                             message:'success',
                             email:email
                        })		
    	})
    	
    })
 .catch(err=>console.log('errorr'))


         });
})



if(process.env.NODE_ENV==="production"){
   app.use(express.static('shopping/build'));
   const path=require('path');
   app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname,'shopping','build','index.html'));
   })
}

const oneHour       = 3600000;    

app.use(express.static('www', { maxAge: oneHour })); 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.disable('etag');


mongoose.connect(process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb+srv://ajay:ajstyles89@cluster0-zvrc2.mongodb.net/signup?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true},
(req,res)=>{
	console.log('connected to database')
}
)

app.listen(PORT,"0.0.0.0",()=>{console.log('app is running on port 3001')});