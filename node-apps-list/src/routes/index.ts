import { Router } from "express";
import appsController from "../controllers/apps.controller";
import categoriesController from "../controllers/categories.controller";

// App router that exposes the endpoints
const router = Router();

router.post("/getApps", appsController.getAll);
router.post("/getCategories", categoriesController.getAll);

export default router;