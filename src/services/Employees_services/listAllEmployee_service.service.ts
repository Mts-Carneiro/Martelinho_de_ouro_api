import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee_service from "../../entities/employees_service.entity";

export const listAllEmployeesServiceService = async () => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = employees_serviceRepo.find({
    relations: {
      employees: true,
      services: true,
    },
  });

  return employees_service;
};
