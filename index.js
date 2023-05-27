import express from "express";
import db from "./config/db.js";
import cors from 'cors';
import dotenv from 'dotenv';
import jugadorRoutes from './routes/jugadorRoutes.js';

dotenv.config({path: '.env'})

const app = express();

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.error());

// const dominiosPermitidos = ['http://localhost:8081']

// const corsOptions = {
//   origin: function(origin, callback) {
//     if(dominiosPermitidos.indexOf(origin) !== -1){
//       // El origien del Reques está permitido
//       callback(null, true)
//     } else {
//       callback(new Error("No permitido por CORS"))
//     }
//   },
// };
 
// app.use(cors(corsOptions))

app.use('/api', jugadorRoutes)
  
// Definir puerto
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`El servido está funcionando en el puerto ${port}`);
});
