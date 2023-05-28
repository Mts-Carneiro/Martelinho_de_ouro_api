import AppDataSource from "../../data-source";
import Employee from "../../entities/employees.entity";

export const createEmployeeService = async (data: any, userId: string) => {
  const employeeRepo = AppDataSource.getRepository(Employee);

  const employee = employeeRepo.create({
    ...data,
    user: userId,
  });

  await employeeRepo.save(employee);

  return employee;
};
