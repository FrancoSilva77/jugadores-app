import  Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config({path: '.env'})

const db = new Sequelize('railway', 'root', 'jeUp7ytcZhzQ4SxSS1QA', {
  host: 'containers-us-west-5.railway.app',
  dialect: 'mysql',
  port: 6046,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
})

export default db;