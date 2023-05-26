const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanets: catchedAsync(require("./createPlanets")),
};
