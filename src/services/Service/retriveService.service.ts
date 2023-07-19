import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";

export const retriveServiceService = async (serviceId: string) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = serviceRepo.findOneBy({
    id: serviceId,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  return service;
};
