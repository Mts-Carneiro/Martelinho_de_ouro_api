import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";
import { AppError } from "../../errors/AppError";

export const retriveEmployeeService = async (id: string) => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = employeeRepo.findOneBy({
    id: id,
  });

  if (!employee) {
    throw new AppError("Employee not exist", 409);
  }

  return employee;
};
