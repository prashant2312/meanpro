var usermodel=require('./usermodel')
var promodel=require('./productmodule')

var mail=require('./mailer.js')
exports.signup=function(req,res){
    if(req.body.email && req.body.password && req.body.name )
    {
        var userdata=new usermodel(req.body)
        userdata.save().then(function(newuser){
            console.log('sign up',newuser)
            mail.sendMail(req.body.email,'successful signup','successful signup')
           
            res.send({
                message:'user entered',
                code:2500
            })
        },function(error)
        {
            console.log('not unique entry')
            console.log('do entery',error.errmsg)
            if(error.code==11000)
            {
                if(error.errmsg.indexOf('email')!=-1)
                {
                    res.send({
                        code:1800,
                        error:'dublicate email'
                    })
                }
               
            }
            else{
                res.send({
                    error:'some error occurs in user creation',
                    code:5000
                })
            }
        }
        )
    }
    else{
    console.log('error in connection')
    res.send({
        error:'connection error'
    })
    }

}
exports.login=function(req,res){
if(req.body.email && req.body.password)
{
    var userdata={
        email:req.body.email,
        password:req.body.password
    }
    usermodel.findOne(userdata).then(function(user)
    {
        if(user)
        {
             console.log('user details',user)
             var details={
                 name:user.name,
                 email:user.email
             }
            res.send({
                name:user.name,
                 email:user.email,
                code:200
            })
            
        }
        else{
            res.send({
        error:'you are not logged in',
        code:404
            })

        
          console.log('you are not logged in')
        }
    },function(error)
    {
        res.send({
            error:'connection error',
            code:500
        })
    })
}

}
exports.addproduct=function(req,res)
{
    if(req.body.productname && req.body.productrate  )
    {
        req.body.productid=Date.now()
        var userdata=new promodel(req.body)
        userdata.save().then(function(newuser){
            console.log('product entered',newuser)
            res.send({
                code:1400,
                message:'product entered'
            })
        },function(error)
        {
            
            if(error.code==11000)
            {
                console.log('not unique entry')
                res.send({
                    code:1200,
                    error:'dublicate entry'
                })
            }
            else{
                res.send({
                    error:'some error occurs in product saving'
                })
            }
        }
        )
    }
    else{
    console.log('error in connection')
    res.send({
        error:'connection error'
    })
    }
}
exports.find=function(req,res)
{
    if(req.params.productid)
    {
        var userdata={
            productid:req.params.productid
        }
        promodel.findOne(userdata).then(function(user)
        {
            if(user)
            {
                 console.log('product details',user)
                 
                res.send({
                    data:user,
                    code:1100
                })
                
            }
            else{
                res.send({
            error:'you are not getting data'
                })
            
              console.log('you are not getting data')
            }
        },function(error)
        {
            res.send({
                error:'connection error'
            })
        })
    }
    else{
        res.send({
            error:'please enter sufficient data',
            code:1300
        })
    }
}
exports.findall=function(req,res)
{
    promodel.find({}).then(function(user){
        res.send({
            details:user
        })
    },
    function(error)
    {
        res,send({
            error:error
        })
    }
    )
}
exports.forgetpass=function(req,res)
{
    if(req.body.email)
    {
    usermodel.findOne({email:req.body.email}).then(function(user)
    {
        if(user)
        { console.log('datails',user)
           var email=user.email
           var password=user.password
           mail.sendMail(email,password,"your password").then(function(success){
               if(success){
                   res.send({
                       code:1400
                   })
               }
           },function(error)
           {
               
               console.log('error sending email',error)
           })
        }
        else{
            res.send({
                code:1300
            })
            console.log('email not found')
        }
    },function(error){
        res.send({
            code:1200
        })
        connsole.log('user not found')
    })
    }
    else{

        res.send({
            code:1500
        })
        console.log('send email id')
    }
    }
exports.remove=function(req,res)
{
    if(req.body.email){
    var request={
        email:req.body.email
    }
    usermodel.remove(request).then(function(success)
    {
        if(success)
        {
            console.log('user removed')
            res.send({
                message:'user removed',
                code:1100
            })
        }
        else{
            console.log('user not removed')
        }
    },
    function(error)
    {
        console.log('user can not removed')
        res.send({
            code:1300
        })
    })
}
else{
   console.log('send email')
   res.send({
       error:'email toh bhejo',
       code:1234

   })
}
}
