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
const MongoUrl='mongodb://rajat123:941040@cluster0-shard-00-00-nb3y9.mongodb.net:27017,cluster0-shard-00-01-nb3y9.mongodb.net:27017,cluster0-shard-00-02-nb3y9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
server.use(bodyparser.json())
server.use(express.static(__dirname + '/dist/p1'));
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
    res.sendFile('./dist/p1/index.html')
})
server.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/p1/index.html'));
    });

server.listen(PORT,function()
    {
        console.log("server is running...");
        mong.connect(MongoUrl,function(error){
            console.log("error in connection with mongodb",error)
        })
    })