const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
	
		firstname:{
			type:String,
			default:''
		},
		lastname:{
			type:String,
			default:''
		},
		email:{
			type:String,
			default:''
		},
		password:{
			type:String,
			default:''
		},
		isdeleted:{
			type:Boolean,
			default:false
		}
	
});

UserSchema.methods.generateHash=function(password){
	return bcrypt.hashSync(password,8)
};

UserSchema.methods.comparePassword=function(password){
	return bcrypt.compareSync(password,this.password)
};

var User=mongoose.model('User',UserSchema);
module.exports=User;
