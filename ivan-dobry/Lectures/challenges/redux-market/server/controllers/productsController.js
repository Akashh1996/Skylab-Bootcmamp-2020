function productsController (Market) {
    function getMethod(req, res) {
        res.json(Market.getMarket())
    }

    return {
        getMethod
    }
}

module.exports = productsController;