import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";
import { AppError } from "../../errors/AppError";

export const updateEmployeeServiceService = async (data: any, id: string) => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = await employees_serviceRepo.findOneBy({
    id: id,
  });

  if (!employees_service) {
    throw new AppError("Employee_service not exist", 409);
  }

  const newEmployees_service = employees_serviceRepo.create({
    ...employees_service,
    ...data,
  });

  await employees_serviceRepo.save(newEmployees_service);

  return employees_service;
};
