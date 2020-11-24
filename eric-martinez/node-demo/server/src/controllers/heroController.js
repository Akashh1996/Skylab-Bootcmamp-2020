function heroController(Hero) {
    function getMethod(req, res) {
      Hero.findOne({id: req.hero},(error, heroFound) => {
        if(error){
          return error;
        }else {
          console.log(heroFound);
          return res.render('detail', {heroFound})
        }
      })
    }
  
    function postMethod(req, res) {
      const updatedHero = {
        ...req.hero,
        ...req.body,
      };
  
      Hero.setHero(updatedHero);
  
      res.json(updatedHero);
    }
  
    function deleteMethod(req, res) {
      const id = +req.params.heroId;
  
      Hero.deleteHero(id);
  
      res.json(Hero.getHeroes());
    }
  
    function allMiddleware(req, res, next) {
      req.hero = +req.params.heroId;
      next();
    }
  
    return {
      getMethod, postMethod, deleteMethod, allMiddleware,
    };
  }
  
  module.exports = heroController;