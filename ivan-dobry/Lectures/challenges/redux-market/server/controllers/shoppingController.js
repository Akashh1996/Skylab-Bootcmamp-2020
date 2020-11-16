function shoppingController(Market) {
    function getMethod (req, res) {
        res.json(Market.getShoppingList())
    }

    function putMethod (req, res) {
        const id = +req.query.id
        Market.addShoppingList(id)
    }

    function deleteMethod (req, res) {
        const id = +req.query.id
        Market.deleteFromShoppingList(id)
        res.json(shoppingList)
    }

    return {
        getMethod, putMethod, deleteMethod,
    };
}