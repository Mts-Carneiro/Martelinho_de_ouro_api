import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";
import { AppError } from "../../errors/AppError";
import { IEmployeeService } from "../../interfaces/employee_service.interface";
import { employeeServiceResponseSchema } from "../../schemas/employee_service.schema";

export const retriveEmployeeSErviceService = async (
  id: string
): Promise<IEmployeeService> => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = await employees_serviceRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      employee: true,
      service: true,
    },
  });

  if (!employees_service) {
    throw new AppError("employees_service not exist", 409);
  }

  const response = employeeServiceResponseSchema.parse(employees_service);

  return response;
};
