import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  employeeResponseSchema,
  employeeSchema,
  listEmployeesSchema,
} from "../schemas/employee.schema";

type IEmployeeRequest = z.infer<typeof employeeSchema>;
type IEmployee = z.infer<typeof employeeResponseSchema>;
type IEmployees = z.infer<typeof listEmployeesSchema>;
type IEmployeeUpdate = DeepPartial<IEmployeeRequest>;


export {
    IEmployee, IEmployeeRequest, IEmployeeUpdate, IEmployees
}