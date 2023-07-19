import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee from "../../entities/employees.entity";

export const updateEmployeeService = async (data: any, id: string) => {
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

  return newEmployee;
};
