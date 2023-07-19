import { Request, Response } from "express";
import { createEmployeeServiceService } from "../services/Employees_services/createEployee_service.service";
import { retriveEmployeeSErviceService } from "../services/Employees_services/retriveEmployee_service.service";
import { listAllEmployeesServiceService } from "../services/Employees_services/listAllEmployee_service.service";
import { updateEmployeeServiceService } from "../services/Employees_services/updateEmployee_service.service";
import { deleteEmployeeServiceService } from "../services/Employees_services/deleteEmployee_service.service";

export const createEmployeeServiceController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;

  const response = await createEmployeeServiceService(data);

  return res.status(201).json(response);
};

export const retriveEmployeeServiceController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const response = await retriveEmployeeSErviceService(id);

  return res.status(200).json(response);
};

export const listAllEmployeesServiceController = async (
  req: Request,
  res: Response
) => {
  const response = await listAllEmployeesServiceService();

  return res.status(200).json(response);
};

export const updateEmployeeServiceController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  const id = req.params.id;

  const response = await updateEmployeeServiceService(data, id);

  return res.status(200).json(response);
};

export const deleteEmployeeServiceController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const response = await deleteEmployeeServiceService(id);

  return res.status(204).json(response);
};
