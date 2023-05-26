const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch("http://database:8004/Character");
    const characters = await response.json();
    return characters;
  } catch (error) {
    console.log("Could not fetch characters from Database:", error.message);
  }
};
