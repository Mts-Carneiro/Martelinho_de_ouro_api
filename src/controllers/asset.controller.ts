import { Request, Response } from "express";
import { createAssetService } from "../services/Asset/createAsset.service";
import { listAllAssetsService } from "../services/Asset/listAssets.service";
import { retriveAssetService } from "../services/Asset/retriveAsset.service";
import { updateAssetService } from "../services/Asset/updateAsset.service";
import { deleteAssetService } from "../services/Asset/daleteAsset.service";

export const createAssetController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.user.id;
  const asset = await createAssetService(data, id);

  return res.status(201).json(asset);
};

export const listAllAssetsController = async (req: Request, res: Response) => {
  const assets = await listAllAssetsService();

  return res.status(200).json(assets);
};

export const retriveAssetController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const asset = await retriveAssetService(id);

  return res.status(200).json(asset);
};

export const updateAssetController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = req.body;

  const asset = await updateAssetService(id, data);

  return res.status(201).json(asset);
};

export const deleteAssetController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteAssetService(id);

  return res.status(204).send();
};
