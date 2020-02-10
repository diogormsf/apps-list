import { Request, Response } from "express";

class AppsController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({
                message: "OK"
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message
            });
        }
    }

    public async getAppsByCategory(req: Request, res: Response): Promise<Response> {
        try {

        } catch (err) {
            return res.status(404).json({
                message: err.message
            });
        }
    }
}

export default new AppsController();