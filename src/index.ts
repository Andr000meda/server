import Server from "./models/server";
import dotenv from 'dotenv'

// Configuramos las variables de abmiente
dotenv.config();

const server = new Server();