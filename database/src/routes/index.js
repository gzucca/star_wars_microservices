const { Router } = require("express");
// const { Character, Film } = require("../database"); // Esta es una forma de hacerlo, pero requiere de varias rutas get
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

// router.get("/character", async (req, res) => {
//   const response = await Character.list();
//   res.status(200).json(response);
// });

// router.get("/film", async (req, res) => {
//   const response = await Film.list();
//   res.status(200).json(response);
// });

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  console.log(model);
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].list(id);
  res.status(200).json(response);
});

module.exports = router;
