import * as cors from "cors";
import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes";
import * as winston from "winston";
import * as expressWinston from "express-winston";

/**
 * App class that represents an Express Application with a
 * Router class exposing an API
 *
 * @export
 * @class App
 */
export class App {

    /**
     * Method that starts an express application running in the port indicated
     * by the server file
     *
     * @static
     * @param {number} port
     * @memberof App
     */
    public static run(port: number): void {
        const app = new App().express;

        app.listen(port, () => {
            console.log(`App-list listening on port ${port}!`);
        });
    }

    public express: express.Application;

    /**
     * Creates an instance of App, initializing an Express instance
     * telling it what resources to use
     * @memberof App
     */
    public constructor() {
        this.express = express();

        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));

        this.express.use(expressWinston.logger({
            transports: [
                new winston.transports.Console()
            ],
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
                winston.format.prettyPrint()
            )
        }));

        this.express.use(router);

        this.express.use(expressWinston.errorLogger({
            transports: [
                new winston.transports.Console()
            ],
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
                winston.format.prettyPrint()
            )
        }));

    }
}