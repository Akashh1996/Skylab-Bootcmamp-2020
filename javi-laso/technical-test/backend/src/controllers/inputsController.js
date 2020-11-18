function inputsController(inputsSchema) {
  function getMethod(req, res) {
    const query = {};
    const findCallBack = (error, inputs) => (error ? res.send(error) : res.json(inputs));
    inputsSchema.find(query, findCallBack);
  }

  function postMethod(req, res) {
    const { text } = req.body;
    const inputObject = {text}
    const createCallback = (error, newItem) => (error ? res.send(error) : res.send(newItem));
    inputsSchema.create(inputObject, createCallback);
  }

  function patchMethod(req, res) {
    const { input, newInput } = req.body;
    const { _id } = input;
    const change = { text: newInput.text };
    const patchCallback = (error, updatedItem) => (error ? res.send(error) : res.send(updatedItem));
    inputsSchema.findByIdAndUpdate(_id, change, patchCallback);
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
