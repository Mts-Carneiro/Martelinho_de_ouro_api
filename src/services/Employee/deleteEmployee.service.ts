import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee from "../../entities/employees.entity";

export const deleteEmployeeService = async (id: string) => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = await employeeRepo.findOneBy({
    id: id,
  });

  if (!employee) {
    throw new AppError("Employee not exist", 409);
  }

  await employeeRepo.remove(employee);
};
