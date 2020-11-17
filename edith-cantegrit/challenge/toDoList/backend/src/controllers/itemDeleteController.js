function itemDeleteController(Items) {
    
    function deleteMethod(req, res) {
        const query = req.params.id
        Items.findByIdAndRemove(query, (errorFindItems) => {
            if(errorFindItems) {
                return res.send(errorFindItems)
            }
            return res.send('supprimé')
        })
    }

    return {
        deleteMethod 
    }
}

module.exports = itemDeleteController;