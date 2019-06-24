var cartmodel=require('./cartmodel')
exports.addtocart=function(req,res)
{
    if(req.body.email && req.body.productid)
{
    var cartdata=new cartmodel(req.body)
    cartdata.save().then(function(newcart){
        console.log('item added to cart',newcart)
        res.send({
            code:1290,
            data:newcart
        })
    },function(error){
        console.log('error in adding to cart',error)
        res.send({
            code:1300,
            error:'internal server error'
        })
    })
}
else{
    console.log('insufficient details')
    res.send({
        error:'insufficient details'
    })
}
}