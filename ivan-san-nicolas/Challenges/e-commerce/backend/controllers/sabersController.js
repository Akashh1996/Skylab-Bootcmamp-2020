function sabersController(Sabers) {
    function getMethod(req, res) {
        res.status(200);
        res.send(Sabers.getSabers());
    }

    return {
        getMethod,
    }
}

module.exports = sabersController;