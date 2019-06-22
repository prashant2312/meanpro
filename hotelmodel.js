var Mongoose = require('mongoose')
var Schema = Mongoose.Schema
var userschema = new Schema({
    hotelname:{required:true,unique:true,type:String},
    hoteladdress:{required:true,type:String},
    hotelrating:{type:Number},
    hotelimg: {required:true,type:String},
    profileimage:{type:String},
   
    isverified:{type:Boolean,default:false},
    role:{type:String,default:'hotel'}
})
module.exports = Mongoose.model('hotel',userschema)


