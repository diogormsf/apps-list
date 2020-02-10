import { Router } from "express";
import appsController from "../controllers/apps.controller";
import categoriesController from "../controllers/categories.controller";

const router = Router();

router.post("/getApps", appsController.getAll);
router.post("/getAppsByCategory", appsController.getAppsByCategory);

router.post("/getCategories", categoriesController.getAll);

export default router;