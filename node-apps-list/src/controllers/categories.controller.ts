import { Request, Response } from "express";

class CategoriesController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {

        } catch (err) {
            return res.status(404).json({
                message: err.message
            }); 
        }
    }
}

export default new CategoriesController();