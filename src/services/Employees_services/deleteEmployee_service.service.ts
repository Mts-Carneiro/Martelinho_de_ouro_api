import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee_service from "../../entities/employees_service.entity";

export const deleteEmployeeServiceService = async (id: string) => {
  const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

  const employees_service = await employees_serviceRepo.findOneBy({
    id: id,
  });

  if (!employees_service) {
    throw new AppError("Table not exist", 409);
  }

  await employees_serviceRepo.remove(employees_service);
};
