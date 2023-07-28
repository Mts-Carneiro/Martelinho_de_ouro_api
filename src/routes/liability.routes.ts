import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createLiabilityController,
  deleteLiabilityController,
  listAllLiabilitiesController,
  retriveLiabilityController,
  updateLiabilityController,
} from "../controllers/liability.controller";

const liabilityRoutes = Router();

liabilityRoutes.get("", ensureAuthMiddleware, listAllLiabilitiesController);
liabilityRoutes.post("", ensureAuthMiddleware, createLiabilityController);
liabilityRoutes.get("/:id", ensureAuthMiddleware, retriveLiabilityController);
liabilityRoutes.patch("/:id", ensureAuthMiddleware, updateLiabilityController);
liabilityRoutes.delete("/:id", ensureAuthMiddleware, deleteLiabilityController);

export default liabilityRoutes;
