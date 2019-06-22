var hotelmod=require('./hotelmodel')
exports.addhotel=function(req,res){
    if( req.body.hoteladdress && req.body.hotelname && req.body.hotelimg  )
    {
        var userdata=new hotelmod(req.body)
        userdata.save().then(function(newuser){
            console.log('hotel added',newuser)
            res.send({
                message:'hotel added'
            })
        },function(error)
        {
            console.log('not unique hotel')
            if(error.code==11000)
            {
                res.send({
                    error:'dublicate entry'
                })
            }
            else{
                res.send({
                    error:'some error occurs in hotel saving'
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
exports.findhotel=function(req,res)
{
    if(req.body.hotelname)
    {
        var userdata={
            hotelname:req.body.hotelname
        }
        hotelmod.findOne(userdata).then(function(user)
        {
            if(user)
            {
                 console.log('user details',user)
                 var details={
                     hotelname:user.hotelname,
                     hoteladdress:user.hoteladdress,
                     hotelrating:user.hotelrating,
                     hotelimg:user.hotelimg
                 }
                res.send(details)
                
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
}