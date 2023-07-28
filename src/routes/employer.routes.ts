import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createEmployeeController,
  deleteEmployeeController,
  listAllEmployeesController,
  retriveEmployeeController,
  updateEmployeeController,
} from "../controllers/employee.controller";

const employeesRoutes = Router();

employeesRoutes.get("", ensureAuthMiddleware, listAllEmployeesController);
employeesRoutes.post("", ensureAuthMiddleware, createEmployeeController);
employeesRoutes.get("/:id", ensureAuthMiddleware, retriveEmployeeController);
employeesRoutes.patch("/:id", ensureAuthMiddleware, updateEmployeeController);
employeesRoutes.delete("/:id", ensureAuthMiddleware, deleteEmployeeController);

export default employeesRoutes;
