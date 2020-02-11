import { Request, Response } from "express";
import * as fs from "fs";

const JSON_PATH = "src/data/apps.json";

class CategoriesController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            fs.readFile(JSON_PATH, (err, data) => {
                if (err) throw err;
                const apps = JSON.parse(data.toString());
                let categories = [];

                apps.forEach(app => {
                    const appCategories = app.categories.filter(elem => {
                        return !categories.includes(elem);
                    });

                    categories = categories.concat(appCategories);
                });

                categories = categories.sort();

                return res.status(200).json({
                    categories
                });
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message
            }); 
        }
    }
}

export default new CategoriesController();