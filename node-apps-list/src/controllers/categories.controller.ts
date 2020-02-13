import { Request, Response } from "express";
import * as fs from "fs";

/**
 * Controller that receives a Request and act according to it:
 * manages all Categories operations, gets the data from the dataSource (json file) 
 * and manipulates it taking in account the given parameters
 * 
 *
 * @class CategoriesController
 */
class CategoriesController {

    /**
     * Method that receives the getAllcategories request,
     * reads the file, and returns it
     *
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<Response>}
     * @memberof CategoriesController
     */
    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            // Async file read that wil trigger the whole process when it finishes
            fs.readFile(process.env.JSON_PATH, (err, data) => {
                if (err) throw err;
                const apps = JSON.parse(data.toString());
                let categories = [];

                // Runs through every app getting all categories
                apps.forEach(app => {
                    // Gets only the categories which aren't already in the array
                    const appCategories = app.categories.filter(elem => {
                        return !categories.includes(elem);
                    });

                    categories = categories.concat(appCategories);
                });

                // Sorts categories alphabetically
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