const { Router } = require('express');

function UserRouter() {
  const router = Router();

  router.get('/', (req, res) => {
    const query = {};
    User.find(query, (errorFindHero, users) => (
      errorFindHero ? res.send(errorFindHero) : res.json(users)
    ));
  });
}
