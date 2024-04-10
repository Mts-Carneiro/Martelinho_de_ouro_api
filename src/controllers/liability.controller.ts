import { Request, Response } from "express";
import { createLiabilityService } from "../services/Liabilitie/createLiability.service";
import { retriveLiabilityService } from "../services/Liabilitie/retriveLiability.service";
import { listAllLiabilitiesServices } from "../services/Liabilitie/listAllLiability.service";
import { updateLiabilityService } from "../services/Liabilitie/updateLiability.service";
import { deleteLiabilityService } from "../services/Liabilitie/deleteLiability.service";

export const createLiabilityController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  const userId = req.user.id;

  const liability = await createLiabilityService(data, userId);

  return res.status(201).json(liability);
};

export const retriveLiabilityController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const liability = await retriveLiabilityService(id);

  return res.status(200).json(liability);
};

export const listAllLiabilitiesController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;

  const liabilities = await listAllLiabilitiesServices(userId);

  return res.status(200).json(liabilities);
};

export const updateLiabilityController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const data = req.body;

  const liability = await updateLiabilityService(data, id);

  return res.status(200).json(liability);
};

export const deleteLiabilityController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  await deleteLiabilityService(id);

  return res.status(204).send();
};
