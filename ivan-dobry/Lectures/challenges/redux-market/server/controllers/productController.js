function productController(Market) {
    function getMethod(req, res) {
        res.json(req.product)
    }

    function allMiddleware(req, res, next) {
        req.product = Market.getProductById(+req.query.id);
        next();
    }

    return {
        getMethod, allMiddleware,
    }
}