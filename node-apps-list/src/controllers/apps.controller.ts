import { Request, Response } from "express";
import * as fs from "fs";

const JSON_PATH = "src/data/apps.json";

class AppsController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            fs.readFile(JSON_PATH, (err, data) => {
                if (err) throw err;
                const apps = JSON.parse(data.toString());

                return res.status(200).json({
                    message: apps
                });
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message
            });
        }
    }

    public async getAppsByCategory(req: Request, res: Response): Promise<Response> {
        try {
            fs.readFile(JSON_PATH, (err, data) => {
                if (err) throw err;
                const apps = JSON.parse(data.toString());

                return res.status(200).json({
                    message: apps
                });
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message
            });
        }
    }
}

export default new AppsController();