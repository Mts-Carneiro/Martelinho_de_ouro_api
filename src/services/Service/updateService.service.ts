import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";

export const updateServiceService = async (serviceId: string, data: any) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOneBy({
    id: serviceId,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  const newService = serviceRepo.create({
    ...service,
    ...data,
  });

  await serviceRepo.save(newService);

  return newService;
};
