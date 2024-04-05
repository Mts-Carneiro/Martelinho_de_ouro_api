import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  IEmployee,
  IEmployeeRequest,
} from "../../interfaces/employee.interface";
import { employeeResponseSchema } from "../../schemas/employee.schema";

export const createEmployeeService = async (
  data: IEmployeeRequest,
  userId: string
): Promise<IEmployee> => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("This user not exist", 409);
  }

  const employee = employeeRepo.create({
    ...data,
    user: user,
  });

  await employeeRepo.save(employee);

  const response = employeeResponseSchema.parse(employee);

  return response;
};
