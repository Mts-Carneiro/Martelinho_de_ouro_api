import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createServiceController,
  deleteServiceController,
  listAllServiceController,
  retriveServiceController,
  updateServiceController,
} from "../controllers/service.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import { serviceSchema, serviceUpdateSchema } from "../schemas/service.schema";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const serviceRoutes = Router();

serviceRoutes.get("", ensureAuthMiddleware, listAllServiceController);
serviceRoutes.post("", ensureAuthMiddleware, createServiceController);
serviceRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveServiceController
);
serviceRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(serviceUpdateSchema),
  updateServiceController
);
serviceRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteServiceController
);

export default serviceRoutes;
