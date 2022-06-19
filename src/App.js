import Controller from './controller/Controller.js';
import * as dotenv from "dotenv";
import express from 'express';


dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.listen(port, () => { console.log(`Servidor lançado na porta ${port}`)})

Controller.rotas(app)

