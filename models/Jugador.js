import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Jugador = db.define('jugadores', {
  nombre: {
    type: Sequelize.STRING
  },
  apellido: {
    type: Sequelize.STRING
  },
  posicion: {
    type: Sequelize.STRING
  },
  equipo: {
    type: Sequelize.STRING
  }
})