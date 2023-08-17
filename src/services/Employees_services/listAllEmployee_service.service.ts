import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Employee_service from "../../entities/employees_service.entity";
import { IListEmployeeService } from "../../interfaces/employee_service.interface";
import { listEmployeeServiceSchema } from "../../schemas/employee_service.schema";

export const listAllEmployeesServiceService =
  async (): Promise<IListEmployeeService> => {
    const employees_serviceRepo = AppDataSource.getRepository(Employee_service);

    const employees_service = employees_serviceRepo.find({
      relations: {
        employee: true,
        service: true,
      },
    });

    const response = listEmployeeServiceSchema.parse(employees_service);

    return response;
  };
