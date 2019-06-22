var express=require('express')
var server=express()
var usercontroller=require('./usercontroller')
var hotelcontroller=require('./hotelcontroller')
var mong=require('mongoose')
var bodyparser=require('body-parser')
const PORT=1400 || Processing.env.PORT
var cors=require('cors')
server.use(cors())
const MongoUrl='mongodb://test:test1234@ds117729.mlab.com:17729/coerproject'
server.use(bodyparser.json())
server.post('/signup',usercontroller.signup)
server.post('/login',usercontroller.login)
server.post('/addproduct',usercontroller.addproduct)
server.get('/find/:productid',usercontroller.find)
server.get('/findall',usercontroller.findall)
server.post('/addhotel',hotelcontroller.addhotel)
server.post('/findhotel',hotelcontroller.findhotel)
server.post('/forgetpass',usercontroller.forgetpass)
server.post('/remove',usercontroller.remove)

server.listen(PORT,function()
    {
        console.log("server is running...");
        mong.connect(MongoUrl,function(error){
            console.log("error in connection with mongodb",error)
        })
    })