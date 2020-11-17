function InputsController(Input) {
  function getMethod(req, res) {
    const query = {};
    Input.find(query, (errorFindInput, inputs) => {
      if (errorFindInput) {
        return res.send(errorFindInput);
      }
      console.log('server is running');
      return res.json(inputs);
    });
  }
  return {
    getMethod,
  };
}
module.exports = InputsController;
