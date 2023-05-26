const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const characterSchema = new Schema(
  {
    _id: String,
    name: String,
    height: {
      type: String,
      get: (v) => (Number.isInteger(Number(v)) ? Number(v) : v),
    },
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planet" }, // REFERENCIA A UN PLANETA,
    films: [{ type: String, ref: "Film" }], // ARRAY DE REFERENCIAS A PELICULAS // ARRAY DE REFERENCIAS A PELICULAS
  },
  {
    toObject: { getters: true, setters: true }, //! ESTO ES NECESARIO PARA QUE FUNCIONE EL GETTER DE HEIGHT (AL MENOS EN EL CONSOLE.LOG DEL CHARACTER.LIST. QUIZAS FUNCIONE SIN NECESIDAD DE ESTO PARA RETORNARLO EN UNA RUTA)
  }
);

// el nombre ".list" no es palabra reservada, es un nombre de funcion
//! Tiene que ser una funcion normal, no una funcion flecha ya que el "this" cambiaría de valor
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
