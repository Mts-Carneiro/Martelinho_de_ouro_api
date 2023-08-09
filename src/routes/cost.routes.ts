import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createCostController,
  deleteCostController,
  listCostsController,
  retriveCostController,
  updateCostController,
} from "../controllers/cost.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import { costSchema, costUpdateSchema } from "../schemas/cost.schema";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const costRoutes = Router();

costRoutes.get("", ensureAuthMiddleware, listCostsController);
costRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(costSchema),
  createCostController
);
costRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveCostController
);
costRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(costUpdateSchema),
  updateCostController
);
costRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteCostController
);

export default costRoutes;
