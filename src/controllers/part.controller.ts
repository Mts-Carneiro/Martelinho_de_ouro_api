import { Request, Response } from "express";
import { creatPartService } from "../services/Part/createPart.service";
import { retrivePartService } from "../services/Part/retrivePart.service";
import { listAllPartsService } from "../services/Part/listParts.service";
import { deletePartService } from "../services/Part/daletePart.service";
import { updatePartService } from "../services/Part/updatePart.service";

export const createPartController = async (req: Request, res: Response) => {
  const data = req.body;

  const part = await creatPartService(data);

  return res.status(201).json(part);
};

export const retrivePartController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const part = await retrivePartService(id);

  return res.status(200).json(part);
};

export const listPartsController = async (req: Request, res: Response) => {
  const parts = await listAllPartsService();

  return res.status(200).json(parts);
};

export const updatePartController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  const newPart = await updatePartService(id, data);

  return res.status(200).json(newPart);
};

export const deletePartController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deletePartService(id);

  return res.status(204).send();
};
