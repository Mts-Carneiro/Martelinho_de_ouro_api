import AppDataSource from "../../data-source";
import Service from "../../entities/Services.entity";

export const createServiceService = async (data: any, userId: string) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = serviceRepo.create({
    ...data,
    user: userId,
  });

  await serviceRepo.save(service);

  return service;
};
