import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import employeesRoutes from "./employer.routes";
import {
  createEmployeeServiceController,
  deleteEmployeeServiceController,
  listAllEmployeesServiceController,
  updateEmployeeServiceController,
} from "../controllers/employees_service.controller";
import { retriveEmployeeSErviceService } from "../services/Employees_services/retriveEmployee_service.service";

const employeeServiceRoutes = Router();

employeeServiceRoutes.get(
  "",
  ensureAuthMiddleware,
  listAllEmployeesServiceController
);
employeeServiceRoutes.post(
  "",
  ensureAuthMiddleware,
  createEmployeeServiceController
);
employeeServiceRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  retriveEmployeeSErviceService
);
employeeServiceRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  updateEmployeeServiceController
);
employeeServiceRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  deleteEmployeeServiceController
);
