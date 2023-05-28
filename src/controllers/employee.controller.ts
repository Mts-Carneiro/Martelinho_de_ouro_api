import { Request, Response } from "express";
import { createEmployeeService } from "../services/Employee/createEmployee.service";
import { retriveEmployeeService } from "../services/Employee/retriveEmployee.service";
import { listAllEmployeesService } from "../services/Employee/listAllEmployees.service";
import { updateEmployeeService } from "../services/Employee/updateEmployee.service";
import { deleteEmployeeService } from "../services/Employee/deleteEmployee.service";

export const createEmployeeController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;

  const employee = await createEmployeeService(data, userId);

  return res.status(201).json(employee);
};

export const retriveEmployeeController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const employee = await retriveEmployeeService(id);

  return res.status(200).json(employee);
};

export const listAllEmployeesController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;

  const employees = await listAllEmployeesService(userId);

  return res.status(200).json(employees);
};

export const updateEmployeeController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const employee = await updateEmployeeService(data, id);

  return res.status(200).json(employee);
};

export const deleteEmployeeController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteEmployeeService(id);

  return res.status(204).send();
};
