import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import employeesRoutes from "./employer.routes";
import {
  createEmployeeServiceController,
  deleteEmployeeServiceController,
  listAllEmployeesServiceController,
  retriveEmployeeServiceController,
  updateEmployeeServiceController,
} from "../controllers/employees_service.controller";

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
  retriveEmployeeServiceController
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
