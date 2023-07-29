import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";
import { serviceResponseSchema } from "../../schemas/service.schema";

export const retriveServiceService = async (serviceId: string) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOne({
    where: {
      id: serviceId,
    },
    relations: {
      user: true,
    },
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  const response = serviceResponseSchema.parse(service);

  return response;
};
