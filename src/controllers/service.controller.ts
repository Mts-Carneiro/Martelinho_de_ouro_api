import { Request, Response } from "express";
import { createServiceService } from "../services/Service/createService.service";
import { retriveServiceService } from "../services/Service/retriveService.service";
import { listAllServicesService } from "../services/Service/listAllServices.service";
import { updateServiceService } from "../services/Service/updateService.service";
import { deleteServiceService } from "../services/Service/deleteService.service";

export const createServiceController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;

  const service = await createServiceService(data, userId);

  return res.status(201).json(service);
};

export const retriveServiceController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const service = await retriveServiceService(id);

  return res.status(200).json(service);
};

export const listAllServiceController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const services = await listAllServicesService(userId);

  return res.status(200).json(services);
};

export const updateServiceController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const service = await updateServiceService(id, data);

  return res.status(200).json(service);
};

export const deleteServiceController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteServiceService(id);

  return res.status(204).send();
};
