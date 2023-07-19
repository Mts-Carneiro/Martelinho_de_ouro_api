import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";
import { AppError } from "../../errors/AppError";

export const retriveEmployeeSErviceService = async (id: string) => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = employees_serviceRepo.findOneBy({
    id: id,
  });

  if (!employees_serviceRepo) {
    throw new AppError("employees_service not exist", 409);
  }

  return employees_service;
};
