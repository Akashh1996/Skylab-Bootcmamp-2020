function tupperController(Tupper) {
  function getMethod(req, res) {
    const tupperId = req.params.tupperId;
    const query = { _id: tupperId };
    Tupper.findOne(query)
    .populate('buyers')
    .populate({
      path: 'recipe',
      populate: { 
        path: 'cooker reviews', 
      populate: { 
        path: 'author'}
    }})
    .exec((error, tupper) => {
      if (error) {
        res.send(error);
      }
      res.json(tupper);
    });
  }; 

  function postMethod(req, res) {
    const updatedTupper = {
      ...req.tupper,
      ...req.body,
    };

    Tupper.setTupper(updatedTupper);

    res.json(updatedTupper);
  }

  return {
    getMethod, postMethod
  };
}

module.exports = tupperController;