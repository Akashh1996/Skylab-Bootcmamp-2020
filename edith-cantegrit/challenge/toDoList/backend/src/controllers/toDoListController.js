function toDoListController(Items) {
    function getMethod(req, res) {
        const query = {}
        Items.find(query, (errorFindItems, findItems) => {
            if(errorFindItems) {
                return res.send(errorFindItems)
            }
            return res.json(findItems)
        })
    }

    function putMethod(req, res) {
        const query = req.body
        Items.create(query, (errorFindItems, findItems) => {
            if(errorFindItems) {
                return res.send(errorFindItems)
            }
            return res.json(findItems)
        })
    }

    return { getMethod, putMethod }
}

module.exports = toDoListController;