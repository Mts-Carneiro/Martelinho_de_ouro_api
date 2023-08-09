import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createLiabilityController,
  deleteLiabilityController,
  listAllLiabilitiesController,
  retriveLiabilityController,
  updateLiabilityController,
} from "../controllers/liability.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import {
  cashOperationSchema,
  cashOperationUpdateSchema,
} from "../schemas/cash_operation.schema";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const liabilityRoutes = Router();

liabilityRoutes.get("", ensureAuthMiddleware, listAllLiabilitiesController);
liabilityRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(cashOperationSchema),
  createLiabilityController
);
liabilityRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveLiabilityController
);
liabilityRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(cashOperationUpdateSchema),
  updateLiabilityController
);
liabilityRoutes.delete(
  "/:id",
  ensureUUIDIsValid,
  ensureAuthMiddleware,
  deleteLiabilityController
);

export default liabilityRoutes;
