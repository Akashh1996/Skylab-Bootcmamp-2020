function InputsController(Input) {
  function getMethod(req, res) {
    const query = {};
    Input.find(query, (errorFindInput, inputs) => {
      if (errorFindInput) {
        return res.send(errorFindInput);
      }
      console.log(inputs);
      return res.json(inputs);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    Input.create(query, (errorFindInput, inputs) => {
      if (errorFindInput) {
        return res.send(errorFindInput);
      }
      return res.json(inputs);
    });
  }
  function deleteMethod(req, res) {
    const query = req.body;
    Input.findByIdAndRemove(query, (errorDelete) => {
      if (errorDelete) {
        return res.send(errorDelete);
      }
      return res.json(query);
    });
  }
  return {
    getMethod, putMethod, deleteMethod,
  };
}
module.exports = InputsController;
