const { Router } = require("express");
const router = new Router();
const searching = require("underscore"); //biblioteca de procesamiento de datos, para recorrer arrays

const heroes = require("./../heroesDB.json");

//OBTENER
router.get("/", (req, res) => {
  res.json(heroes);
});

//AÑADIR
router.post("/", (req, res) => {
  const { id, name } = req.body; //todos los heroes recibidos tendrán id y name
  const newHeroe = { id, name };
  if (id && name) {
    heroes.push(newHeroe);
    res.json(heroes);
  } else {
    res.status(500).json({ error: "Sorry, something went wrong. Please try again" });
  }
});

//ACTUALIZAR
router.put("/:id", (req, res) => {
  const { id } = +req.params;
  // console.log(id);
  const { name } = req.body;
  if (id && name) {
    searching.each(heroes, (heroe, i) => {
      if (heroe.id === id) {
        heroe.name = name;
      }
    });
    res.json(heroes);
  } else {
    res.status(500).json({ error: "There was an error.Please try again" });
  }
});

//ELIMINAR
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    searching.each(heroes, (heroe, i) => {
      if (heroe.id == id) {
        heroes.splice(i, 1);
      }
    });
    res.json(heroes);
  }
});

module.exports = router;
