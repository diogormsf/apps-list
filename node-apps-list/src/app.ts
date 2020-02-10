import * as cors from "cors";
import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes";

export class App {
    public static run (port: number): void {
        const app = new App().express;

        app.listen(port)
    }

    public express: express.Application;

    public constructor() {
        this.express = express();

        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));

        this.express.use(router);
    }
}