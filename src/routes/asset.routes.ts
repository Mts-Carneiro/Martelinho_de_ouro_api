import { Router } from "express";
import {
  createAssetController,
  deleteAssetController,
  listAllAssetsController,
  retriveAssetController,
  updateAssetController,
} from "../controllers/asset.controller";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import {
  cashOperationSchema,
  cashOperationUpdateSchema,
} from "../schemas/cash_operation.schema";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const assetRoutes = Router();

assetRoutes.get("", ensureAuthMiddleware, listAllAssetsController);
assetRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(cashOperationSchema),
  createAssetController
);
assetRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveAssetController
);
assetRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(cashOperationUpdateSchema),
  updateAssetController
);
assetRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteAssetController
);

export default assetRoutes;
