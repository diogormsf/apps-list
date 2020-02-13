import { Request, Response } from "express";
import * as fs from "fs";

let sort = require('../helpers/sort');

/**
 * Controller that receives a Request and act according to it:
 * manages all Apps operations, gets the data from the dataSource (json file) 
 * and manipulates it taking in account the given parameters
 * 
 *
 * @class AppsController
 */
class AppsController {

    /**
     * Method that receives the getAllApps request, reads the file,
     * checks if there are any filters and if so filters the data and returns it
     *
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<Response>}
     * @memberof AppsController
     */
    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            // Async file read that wil trigger the whole process when it finishes
            fs.readFile(process.env.JSON_PATH, (err, data) => {
                if (err) throw err;
                let apps = JSON.parse(data.toString());

                // Check category parameter
                if (req.body.category) {
                    apps = apps.filter(elem => elem.categories.includes(req.body.category));
                }

                // Check search filter parameter
                if (req.body.searchFilter) {
                    apps = apps.filter(elem => elem.name.toLowerCase().includes(req.body.searchFilter.toLowerCase()));
                }

                // Uses the sort helper class method to sort the apps according to its subscriptions
                apps = sort.sortSubscriptions(apps);

                // OK response with status 200
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