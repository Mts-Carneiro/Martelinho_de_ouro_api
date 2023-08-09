import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";
import { AppError } from "../../errors/AppError";
import { IEmployeeService } from "../../interfaces/employee_service.interface";
import { employeeServiceResponseSchema } from "../../schemas/employee_service.schema";

export const retriveEmployeeSErviceService = async (
  id: string
): Promise<IEmployeeService> => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = employees_serviceRepo.findOneBy({
    id: id,
  });

  if (!employees_serviceRepo) {
    throw new AppError("employees_service not exist", 409);
  }

  const response = employeeServiceResponseSchema.parse(employees_service);

  return response;
};
