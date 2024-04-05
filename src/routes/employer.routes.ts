import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createEmployeeController,
  deleteEmployeeController,
  listAllEmployeesController,
  retriveEmployeeController,
  updateEmployeeController,
} from "../controllers/employee.controller";
import {
  employeeSchema,
  employeeUpdateSchema,
} from "../schemas/employee.schema";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const employeesRoutes = Router();

employeesRoutes.get("", ensureAuthMiddleware, listAllEmployeesController);
employeesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(employeeSchema),
  createEmployeeController
);
employeesRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveEmployeeController
);
employeesRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(employeeUpdateSchema),
  updateEmployeeController
);
employeesRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteEmployeeController
);

export default employeesRoutes;
