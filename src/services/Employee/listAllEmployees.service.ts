import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";
import { AppError } from "../../errors/AppError";
import { IEmployees } from "../../interfaces/employee.interface";
import { listEmployeesSchema } from "../../schemas/employee.schema";

export const listAllEmployeesService = async (
  userId: string
): Promise<IEmployees> => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employees = await employeeRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!employees) {
    throw new AppError("Employeer not exist", 409);
  }

  const response = listEmployeesSchema.parse(employees);

  return response;
};
