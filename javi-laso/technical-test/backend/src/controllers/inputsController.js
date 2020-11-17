function inputsController(inputsSchema) {
  function getMethod(req, res) {
    const query = {};
    const findCallBack = (error, inputs) => (error ? res.send(error) : res.json(inputs));
    inputsSchema.find(query, findCallBack);
  }

  function postMethod(req, res) {
    const { input } = req.body;
    const createCallback = (error, newItem) => (error ? res.send(error) : res.send(newItem));
    inputsSchema.create(input, createCallback);
  }

  function patchMethod(req, res) {
    const { input } = req.body;
    const query = { _id: input._id };
  }

  function deleteMethod(req, res) {

  }

  return {
    getMethod,
    postMethod,
    patchMethod,
    deleteMethod,
  };
}

module.exports = inputsController;
