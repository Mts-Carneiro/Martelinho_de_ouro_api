import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createCostController,
  deleteCostController,
  listCostsController,
  retriveCostController,
  updateCostController,
} from "../controllers/cost.controller";

const costRoutes = Router();

costRoutes.get("", ensureAuthMiddleware, listCostsController);
costRoutes.post("", ensureAuthMiddleware, createCostController);
costRoutes.get("/:id", ensureAuthMiddleware, retriveCostController);
costRoutes.patch("/:id", ensureAuthMiddleware, updateCostController);
costRoutes.delete("/:id", ensureAuthMiddleware, deleteCostController);

export default costRoutes;
