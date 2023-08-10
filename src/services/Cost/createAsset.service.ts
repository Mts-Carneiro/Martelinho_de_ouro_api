import AppDataSource from "../../data-source";
import Service from "../../entities/Services.entity";
import Cost from "../../entities/costs.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { ICostRequest } from "../../interfaces/cost.interface";
import {
  costResponseSchema,
  costServiceResponseSchema,
} from "../../schemas/cost.schema";

export const creatCostService = async (data: ICostRequest) => {
  const CostRepo = AppDataSource.getRepository(Cost);
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOneBy({
    id: data.service,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  const cost = CostRepo.create({
    ...data,
    service: service,
  });

  await CostRepo.save(cost);

  const response = costServiceResponseSchema.parse(cost);

  return response;
};
