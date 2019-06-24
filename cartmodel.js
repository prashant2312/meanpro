var Mongoose = require('mongoose')
var Schema = Mongoose.Schema
var cartschema = new Schema({
  productid:{type:Number,required:true},
  email:{type:String},
  productname:{type:String,required:true},
  productimg:{type:String,required:true},
  productrate:{type:Number,required:true},
   role:{type:String,default:'cart'}
})
module.exports = Mongoose.model('cart',cartschema)


