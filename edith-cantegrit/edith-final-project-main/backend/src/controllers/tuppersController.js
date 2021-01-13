function tuppersController(Tupper) {
    function getMethod(req, res) {
      const query = {};
      Tupper.find(query)
      .populate('recipe')
      .populate('buyers')
      .exec((error, tuppers) => {
        if (error) {
          res.send(error);
        }
        res.json(tuppers);
      });
    }; 
        
        return { getMethod };
  }
  
  module.exports = tuppersController;
