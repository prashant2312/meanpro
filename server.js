var path = require('path')

var express=require('express')
var server=express()
var usercontroller=require('./usercontroller')
var hotelcontroller=require('./hotelcontroller')
var mong=require('mongoose')
var bodyparser=require('body-parser')
const PORT=process.env.PORT || 1400
var cors=require('cors')
server.use(cors())
const MongoUrl='mongodb://test:test1234@ds117729.mlab.com:17729/coerproject'
server.use(bodyparser.json())
server.post('/api/signup',usercontroller.signup)
server.post('/api/login',usercontroller.login)
server.post('/api/addproduct',usercontroller.addproduct)
server.get('/api/find/:productid',usercontroller.find)
server.get('/api/findall',usercontroller.findall)
server.post('/api/addhotel',hotelcontroller.addhotel)
server.post('/api/findhotel',hotelcontroller.findhotel)
server.post('/api/forgetpass',usercontroller.forgetpass)
server.post('/api/remove',usercontroller.remove)
server.get('/', function(req,res){
    res.sendFile('./dist/frontend/index.html')
})
server.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));
    });

server.listen(PORT,function()
    {
        console.log("server is running...");
        mong.connect(MongoUrl,function(error){
            console.log("error in connection with mongodb",error)
        })
    })