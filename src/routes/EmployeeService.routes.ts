import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createEmployeeServiceController,
  deleteEmployeeServiceController,
  listAllEmployeesServiceController,
  retriveEmployeeServiceController,
  updateEmployeeServiceController,
} from "../controllers/employees_service.controller";
import {
  employeeServiceSchema,
  employeeServiceUpdateSchema,
} from "../schemas/employee_service.schema";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const employeeServiceRoutes = Router();

employeeServiceRoutes.get(
  "",
  ensureAuthMiddleware,
  listAllEmployeesServiceController
);
employeeServiceRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(employeeServiceSchema),
  createEmployeeServiceController
);
employeeServiceRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveEmployeeServiceController
);
employeeServiceRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(employeeServiceUpdateSchema),
  updateEmployeeServiceController
);
employeeServiceRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteEmployeeServiceController
);
