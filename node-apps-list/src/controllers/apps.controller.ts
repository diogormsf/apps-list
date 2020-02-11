import { Request, Response } from "express";
import * as fs from "fs";

let sort = require('../helpers/sort');

class AppsController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            fs.readFile(process.env.JSON_PATH, (err, data) => {
                if (err) throw err;
                let apps = JSON.parse(data.toString());

                apps = sort.sortSubscriptions(apps);

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
            fs.readFile(process.env.JSON_PATH, (err, data) => {
                if (err) throw err;
                let apps = JSON.parse(data.toString());

                if (req.body.category) {
                    apps.filter(elem => elem.categories.includes(req.body.category));
                }

                if (req.body.searchFilter) {
                    apps.filter(elem => elem.name.includes(req.body.searchFilter));
                }

                apps = sort.sortSubscriptions(apps);

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