function saberController(Sabers) {
    function getMethod(req, res) {
        console.log(req);
        res.status(200);
        res.send(req.product);
    }

    function allMidleware(req, res, next) {
        req.product = Sabers.getSaberByName(req.params.saberName);
        next();
    }

    return {
        getMethod,
        allMidleware,
    }
}

module.exports = saberController;