const mongoose = require('mongoose');

const CartSchema=new mongoose.Schema({
    email:{
    	type:String,
    	default:''
    },
	count:{
		type:Array,
		default:0
	},
	total:{
		type:Number,
		default:0
	},
	mycart:{
		type:Array,
		default:''
	},
	rate:{
		type:Array,
		default:0
	}
})

module.exports=mongoose.model('CartSchema',CartSchema);
