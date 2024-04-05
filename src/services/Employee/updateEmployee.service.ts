import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee from "../../entities/employees.entity";
import {
  IEmployee,
  IEmployeeUpdate,
} from "../../interfaces/employee.interface";
import { employeeResponseSchema } from "../../schemas/employee.schema";

export const updateEmployeeService = async (
  data: IEmployeeUpdate,
  id: string
): Promise<IEmployee> => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = await employeeRepo.findOneBy({
    id: id,
  });

  if (!employee) {
    throw new AppError("Employee not exist", 409);
  }

  const newEmployee = employeeRepo.create({
    ...employee,
    ...data,
  });

  await employeeRepo.save(newEmployee);

  const response = employeeResponseSchema.parse(newEmployee);

  return response;
};
