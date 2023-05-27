import {Jugador} from "../models/Jugador.js";

const mostrarJugadores = async (req, res) => {
  const jugadores = await Jugador.findAll()

  res.json(jugadores)
}

export {
  mostrarJugadores
}