import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";

export const deleteServiceService = async (id: string) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOneBy({
    id: id,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  await serviceRepo.remove(service);
};
