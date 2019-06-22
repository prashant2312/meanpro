var express=require('express');
var server=express();
server.get('/email',function(req,res)
{
    
    if(req.query.emailid)
    {
    var emailrecieve=req.query.emailid
    var raj=require('./mailer.js')
    raj.sendMail(emailrecieve)
        
        

    }
    else{
        res.send({
            error:"email id toh bhejo"
        })
    }
    
})
server.listen(2000,function(){
	console.log("server is running");
})