import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";

export const listAllServicesService = async (userId: string) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const services = serviceRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!services) {
    throw new AppError("Service not exist", 409);
  }

  return services;
};
