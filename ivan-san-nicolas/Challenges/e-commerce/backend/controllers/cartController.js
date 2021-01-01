function cartController(Cart, Sabers) {
    function getMethod(req, res) {
        const query = {};
        Cart.find(query, (errorFindingCart, cart) => {
            if(errorFindingCart) {
                res.send(errorFindingCart);
            } else {
                res.status(200);
                res.send(cart);
            }
        });
    }

    function postMethod(req, res) {
        const productName = req.query.productName;
        const productColor = req.query.productColor;
        const query = { ["product-name"]: productName };
        
        Sabers.findOne(query, (errorFindingSaber, saber) => {
            if(errorFindingSaber){
            return res.send(errorFindingSaber)
            } else {
                saber["actual-color"] = productColor;
                const conditionToUpdate = { productList: [...productList, saber]};
                const query = { };
                Cart.updateOne(query, conditionToUpdate, (errorCreatingSaber, cart) => {
                    errorCreatingSaber ? res.send(errorCreatingSaber) : res.json(cart)
                });
            }
        });
    }
    /*
    function deleteMethod(req, res) {
        const productName = req.query.productName[0];
        const newCart = [];
        let repeatedProducts = 0;
        let cart = Cart.getCart();
        cart[0]["product-list"].map((product) => {
            if(product["product-name"] !== productName || repeatedProducts > 0) {
                newCart.push(product);
            } else {
                repeatedProducts++;
            }
        });
        cart[0]["product-list"] = newCart;
        res.status(200);
        res.send(cart);
    }
 */
    return {
        getMethod,
        postMethod,
       /* deleteMethod, */
    }
}

module.exports = cartController;