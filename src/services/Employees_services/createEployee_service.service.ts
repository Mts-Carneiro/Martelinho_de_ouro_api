import AppDataSource from "../../data-source";
import Employee_service from "../../entities/employees_service.entity";

export const createEmployeeServiceService = async (data: any) => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = employees_serviceRepo.create({
    ...data,
  });

  await employees_serviceRepo.save(employees_service);

  return employees_service;
};
