const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newFilm = await Films.create();
  response(res, 201, newFilm);
};
