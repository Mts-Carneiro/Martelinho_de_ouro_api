import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";
import { AppError } from "../../errors/AppError";

export const listAllEmployeesService = async (userId: string) => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = employeeRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!employee) {
    throw new AppError("Employeer not exist", 409);
  }

  return employee;
};
