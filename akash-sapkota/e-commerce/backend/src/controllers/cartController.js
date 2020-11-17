const { red } = require("chalk")

function cartController(Cart){
    
    function postMethod(req,res){
        let product = req.body
        product = {...product, _id: null}
        Cart.create(product, (error, product)=>{
            if(error){
                res.send(error)
            }else{ 
                res.send(product)
            }
        })
    }
    function getMethod(req,res){
        Cart.find({}, (error,cart)=>{
            if(error){
                red.send(error)
            }
            res.send(cart)
        })
    }
    return {
         postMethod, getMethod
    }
}
module.exports = cartController