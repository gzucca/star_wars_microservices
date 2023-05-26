const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch("http://database:8004/Film");
    const films = await response.json();
    return films;
  } catch (error) {
    console.log("Could not fetch films from Database:", error.message);
  }
};
