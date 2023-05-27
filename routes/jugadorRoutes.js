import express  from "express";
const router = express.Router();

import {
  mostrarJugadores
} from '../controllers/jugadorController.js'


router.get("/", mostrarJugadores);

export default router;