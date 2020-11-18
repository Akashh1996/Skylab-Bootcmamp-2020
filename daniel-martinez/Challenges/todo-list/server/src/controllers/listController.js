function listController(Tvshows) {
  function getMethod(req, res) {
    const query = {};
    Tvshows.find(query, (errorFindTvShow, tvshows) => {
      let response = '';
      switch (!errorFindTvShow) {
        case false:
          response = res.send(errorFindTvShow);
          break;

        default:
          response = res.json(tvshows);
          break;
      }
      return response;
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Tvshows.create(query, (errorFindTvShow, tvshows) => {
      let response = '';
      switch (!errorFindTvShow) {
        case false:
          response = res.send(errorFindTvShow);
          break;

        default:
          response = res.json(tvshows);
          break;
      }
      return response;
    });
  }

  function deleteMethod(req, res) {
    const query = req.body;
    Tvshows.findOneAndRemove(query, (errorFindTvShow, tvshows) => {
      let response = '';
      switch (!errorFindTvShow) {
        case false:
          response = res.send(errorFindTvShow);
          break;

        default:
          response = res.json(tvshows);
          break;
      }
      return response;
    });
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = listController;
