function itemDeleteController(Items) {
    
    function deleteMethod(req, res) {
        const { id } = req.params.id
        Items.findByIdAndRemove(id, (errorFindItems) => {
            if(errorFindItems) {
                return res.send(errorFindItems)
            }
            return res.send('delete')
        })
    }

    return {
        deleteMethod 
    }
}

module.exports = itemDeleteController;
