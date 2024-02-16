import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";

import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import {
  createPartController,
  deletePartController,
  listPartsController,
  retrivePartController,
  updatePartController,
} from "../controllers/part.controller";
import { partSchema, partUpdateSchema } from "../schemas/part.schema";

const partRoutes = Router();

partRoutes.get("", ensureAuthMiddleware, listPartsController);
partRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(partSchema),
  createPartController
);
partRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retrivePartController
);
partRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(partUpdateSchema),
  updatePartController
);
partRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deletePartController
);

export default partRoutes;
