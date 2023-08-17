import AppDataSource from "../../data-source";
import Service from "../../entities/Services.entity";
import Employee from "../../entities/employees.entity";
import Employee_service from "../../entities/employees_service.entity";
import { AppError } from "../../errors/AppError";
import {
  IEmployeeService,
  IEmployeeServiceRequest,
} from "../../interfaces/employee_service.interface";
import { employeeServiceResponseSchema } from "../../schemas/employee_service.schema";

export const createEmployeeServiceService = async (
  data: IEmployeeServiceRequest
): Promise<IEmployeeService> => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);
  const employeeRepo = AppDataSource.getRepository(Employee);
  const serviceRepo = AppDataSource.getRepository(Service);

  const employeer = await employeeRepo.findOneBy({
    id: data.employee,
  });

  if (!employeer) {
    throw new AppError("Employeer not exist!", 409);
  }

  const service = await serviceRepo.findOneBy({
    id: data.service,
  });

  if (!service) {
    throw new AppError("Service not exist!", 409);
  }

  const employees_service = employees_serviceRepo.create({
    ...data,
    employee: employeer,
    service: service,
  });

  await employees_serviceRepo.save(employees_service);

  const response = employeeServiceResponseSchema.parse(employees_service);

  return response;
};
