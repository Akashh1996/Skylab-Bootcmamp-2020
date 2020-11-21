function peopleController(People) {
    function getMethod(req, res) {
        const query = {};
        const callback = (errorFindingPeople, people) => {
            errorFindingPeople ? res.send(errorFindingPeople) : res.json(people);
        }
        People.find(query)
        .populate({
            path: 'adress',
            populate: {
                path: 'country',
            },
        })
        .exec(callback);
    }

    function postMethod(req, res) {
        const { peopleName, peopleAge, peopleAdress } = req.body;
        const newPeople = { name: peopleName, age: peopleAge, adress: peopleAdress };
        People.create(newPeople, (errorCreatingPeople, people) => {
            errorCreatingPeople ? res.send(errorCreatingPeople) : res.json(people);
        });
    }

    return {
        getMethod,
        postMethod,
    }
}

module.exports = peopleController;