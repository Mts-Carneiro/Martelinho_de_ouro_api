import AppDataSource from "../../data-source";
import Service from "../../entities/Services.entity";
import Part from "../../entities/parts.entity";
import { AppError } from "../../errors/AppError";
import { IPartRequest } from "../../interfaces/part.interface";
import { partServiceResponseSchema } from "../../schemas/part.schema";

export const creatPartService = async (data: IPartRequest) => {
  const partRepo = AppDataSource.getRepository(Part);
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOneBy({
    id: data.service,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  const part = partRepo.create({
    ...data,
    service: service,
  });

  await partRepo.save(part);

  const response = partServiceResponseSchema.parse(part);

  return response;
};
