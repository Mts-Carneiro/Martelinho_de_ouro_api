import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  employeeServiceResponseSchema,
  employeeServiceSchema,
  listEmployeeServiceSchema,
} from "../schemas/employee_service.schema";

type IEmployeeServiceRequest = z.infer<typeof employeeServiceSchema>;
type IEmployeeService = z.infer<typeof employeeServiceResponseSchema>;
type IEmployeeServiceUpdate = DeepPartial<IEmployeeServiceRequest>;
type IListEmployeeService = z.infer<typeof listEmployeeServiceSchema>;

export {
  IEmployeeServiceRequest,
  IEmployeeServiceUpdate,
  IEmployeeService,
  IListEmployeeService,
};
