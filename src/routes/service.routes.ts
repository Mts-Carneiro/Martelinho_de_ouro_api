import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createServiceController,
  deleteServiceController,
  listAllServiceController,
  retriveServiceController,
  updateServiceController,
} from "../controllers/service.controller";

const serviceRoutes = Router();

serviceRoutes.get("", ensureAuthMiddleware, listAllServiceController);
serviceRoutes.patch("", ensureAuthMiddleware, createServiceController);
serviceRoutes.get("/:id", ensureAuthMiddleware, retriveServiceController);
serviceRoutes.patch("/:id", ensureAuthMiddleware, updateServiceController);
serviceRoutes.delete("/:id", ensureAuthMiddleware, deleteServiceController);

export default serviceRoutes;
