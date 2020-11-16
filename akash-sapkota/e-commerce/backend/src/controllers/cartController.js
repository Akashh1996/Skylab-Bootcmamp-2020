function cartController(Product){
    function getMethod(req,res){
       res.json(Product.getCart())
    }
    function postMethod(req,res){
        console.log(req.body);
        Product.addProduct(req.body)
        res.json(Product.getCart())
    }
    return {
        getMethod, postMethod
    }
}
module.exports = cartController