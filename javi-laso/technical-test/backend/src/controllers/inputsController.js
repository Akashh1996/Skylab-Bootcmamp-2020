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
    const { input, newInput } = req.body;
    const query = { _id: input._id };
    const change = { text: newInput.text };
    const patchCallback = (error, response) => (error ? res.send(error) : res.send(response));
    inputsSchema.updateOne(query, change, patchCallback);
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    const deleteCallback = (error, deletedItem) => error ? res.send(error) : res.send(deletedItem)
    inputsSchema.findByIdAndDelete(_id, deleteCallback)
  }

  return {
    getMethod,
    postMethod,
    patchMethod,
    deleteMethod,
  };
}

module.exports = inputsController;
