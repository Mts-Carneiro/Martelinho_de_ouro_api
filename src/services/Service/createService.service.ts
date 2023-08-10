import AppDataSource from "../../data-source";
import Service from "../../entities/Services.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IService, IServiceRequest } from "../../interfaces/service.interface";
import { serviceResponseSchema } from "../../schemas/service.schema";

export const createServiceService = async (
  data: IServiceRequest,
  userId: string
): Promise<IService> => {
  const serviceRepo = AppDataSource.getRepository(Service);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("This user not exist", 409);
  }

  const service = serviceRepo.create({
    ...data,
    delivery_date: new Date(data.delivery_date),
    user: user,
  });

  await serviceRepo.save(service);

  const response = serviceResponseSchema.parse(service);

  return response;
};
