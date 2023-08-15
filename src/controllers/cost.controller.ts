import { Request, Response } from "express";
import { creatCostService } from "../services/Cost/createCost.service";
import { retriveCostService } from "../services/Cost/retriveCost.service";
import { listAllCostsService } from "../services/Cost/listCosts.service";
import { updateCostService } from "../services/Cost/updateCost.service";
import { deleteCostService } from "../services/Cost/daleteCost.service";

export const createCostController = async (req: Request, res: Response) => {
  const data = req.body;

  const cost = await creatCostService(data);

  return res.status(201).json(cost);
};

export const retriveCostController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const cost = await retriveCostService(id);

  return res.status(200).json(cost);
};

export const listCostsController = async (req: Request, res: Response) => {
  const costs = await listAllCostsService();

  return res.status(200).json(costs);
};

export const updateCostController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  const newCost = await updateCostService(id, data);

  return res.status(200).json(newCost);
};

export const deleteCostController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteCostService(id);

  return res.status(204).send();
};
