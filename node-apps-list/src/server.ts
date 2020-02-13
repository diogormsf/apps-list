import * as dotenv from "dotenv";
import { App } from "./app";

/* Entry door to the server app that defines the
port in which the app is going to run by getting the
value from the .env file */
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3001;

App.run(PORT);