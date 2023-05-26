const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch("http://database:8004/Planet");
    const planets = await response.json();
    return planets;
  } catch (error) {
    console.log("Could not fetch planets from Database:", error.message);
  }
};
