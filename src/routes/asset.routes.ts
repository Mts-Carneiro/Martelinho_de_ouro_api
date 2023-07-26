import { Router } from "express";
import {
  createAssetController,
  deleteAssetController,
  listAllAssetsController,
  retriveAssetController,
  updateAssetController,
} from "../controllers/asset.controller";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";

const assetRoutes = Router();

assetRoutes.get("", ensureAuthMiddleware, listAllAssetsController);
assetRoutes.post("", ensureAuthMiddleware, createAssetController);
assetRoutes.get("/:id", ensureAuthMiddleware, retriveAssetController);
assetRoutes.patch("/:id", ensureAuthMiddleware, updateAssetController);
assetRoutes.delete("/:id", ensureAuthMiddleware, deleteAssetController);

export default assetRoutes;
