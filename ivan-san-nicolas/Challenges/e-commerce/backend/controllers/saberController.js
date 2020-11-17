function saberController(Sabers) {
    function getMethod(req, res) {
        const saberName = req.params.saberName;
        const query = { "product-name": saberName };
        Sabers.find(query, (errorFindingSaber, saber) => {
            if(errorFindingSaber) {
                res.send(errorFindingSaber);
            } else {
                res.status(200);
                res.send(saber);
            }
        });
    }

    return {
        getMethod,
    }
}

module.exports = saberController;