import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";
import {
  IEmployeeService,
  IEmployeeServiceRequest,
} from "../../interfaces/employee_service.interface";
import { employeeServiceResponseSchema } from "../../schemas/employee_service.schema";

export const createEmployeeServiceService = async (
  data: IEmployeeServiceRequest
): Promise<IEmployeeService> => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = employees_serviceRepo.create({
    ...data,
  });

  await employees_serviceRepo.save(employees_service);

  const response = employeeServiceResponseSchema.parse(employees_service);

  return response;
};
