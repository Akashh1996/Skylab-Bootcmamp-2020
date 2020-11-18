function sabersController(Sabers) {
    function getMethod(req, res) {
        const query = {};
        Sabers.find(query, (errorFindSabers, sabers) => {
            if(errorFindSabers) {
                res.send(errorFindSabers);
            } else {
                res.status(200);
                res.send(sabers);
            }
        });
    }

    return {
        getMethod,
    }
}

module.exports = sabersController;