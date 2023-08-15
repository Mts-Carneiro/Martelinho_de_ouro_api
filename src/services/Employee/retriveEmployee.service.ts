import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";
import { AppError } from "../../errors/AppError";
import { IEmployee } from "../../interfaces/employee.interface";
import { employeeResponseSchema } from "../../schemas/employee.schema";

export const retriveEmployeeService = async (
  id: string
): Promise<IEmployee> => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = await employeeRepo.findOneBy({
    id: id,
  });

  if (!employee) {
    throw new AppError("Employee not exist", 409);
  }

  const response = employeeResponseSchema.parse(employee);

  return response;
};
