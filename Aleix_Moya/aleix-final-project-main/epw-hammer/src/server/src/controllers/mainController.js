function WargearController(MarinesWargear, HarlequinWargear, NecronWargear) {
  function allMethod(req, res, next) {
    const { gunModel } = req.params;
    let gun = null;
    switch (gunModel) {
      case 'Astartes':
        gun = MarinesWargear;
        break;
      case 'Harlequins':
        gun = HarlequinWargear;
        break;
      case 'Necrons':
        gun = NecronWargear;
        break;
      default:
        gun = MarinesWargear;
        break;
    }
    req.gun = gun;
    next();
  }

  function getMethod(req, res) {
    const { gun } = req;
    const query = {};

    gun.find(query, (errorFind, guns) => ((errorFind)
      ? res.send(errorFind)
      : res.json(guns)));
  }

  return {
    getMethod, allMethod,
  };
}

module.exports = WargearController;
