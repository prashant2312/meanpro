var Mongoose = require('mongoose')
var Schema = Mongoose.Schema
var userschema = new Schema({
    name:{required:true,type:String},
    email:{required:true,unique:true,type:String},
    wallet:{type:Number,default:10000},
    password : {required:true,type:String},
     profileimage:{type:String},
   
    isverified:{type:Boolean,default:false},
    role:{type:String,default:'kao'}
})
module.exports = Mongoose.model('kao',userschema)


