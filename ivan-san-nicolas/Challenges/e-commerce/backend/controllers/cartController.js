function cartController(Cart) {
    function getMethod(req, res) {
        res.status(200);
        res.send(Cart.getCart());
    }

    function postMethod(req, res) {
        const productName = req.query.productName;
        const productColor = req.query.productColor;
        let cartProduct = null;
        const sabers = Cart.getSabers();
        sabers.map((product) => {
            if(product["product-name"] === productName) {
                let newProduct = product;
                newProduct["actual-color"] = productColor;
                cartProduct = newProduct;
            }
        });
        Cart.addProductToCart(cartProduct);
        res.status(200);
        res.send(Cart.getCart());
    }

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

    return {
        getMethod,
        postMethod,
        deleteMethod,
    }
}

module.exports = cartController;