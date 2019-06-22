var Mongoose = require('mongoose')
var Schema = Mongoose.Schema
var userschema = new Schema({
    productname:{required:true,unique:true,type:String},
    productrate:{required:true,unique:true,type:String},
    
    productsno : {required:true,type:String},
    productid : {required:true,unique:true,type:Number},
   
    profileimage:{type:String},
    productmod:{type:String,required:true},
    productimg:{type:String},
    productseller:{type:String},
    productrating:{type:Number},
    
    isverified:{type:Boolean,default:false},
    role:{type:String,default:'product'}
})
module.exports = Mongoose.model('product',userschema)
