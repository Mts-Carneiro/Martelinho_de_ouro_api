import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Service from "../../entities/Services.entity";
import {
  serviceResponseSchema,
  serviceSchema,
} from "../../schemas/service.schema";
import {
  IService,
  IServiceRequest,
  IServiceUpdate,
} from "../../interfaces/service.interface";
import { DeepPartial } from "typeorm";
import { parseISO } from "date-fns";

export const updateServiceService = async (
  serviceId: string,
  data: IServiceUpdate
) => {
  const serviceRepo = AppDataSource.getRepository(Service);

  const service = await serviceRepo.findOneBy({
    id: serviceId,
  });

  if (!service) {
    throw new AppError("Service not exist", 409);
  }

  const newData = {
    ...data,
    delivery_date: data.delivery_date
      ? parseISO(data.delivery_date)
      : undefined,
  };

  const newService: DeepPartial<Service> = serviceRepo.create({
    ...service,
    ...newData,
    delivery_date:
      newData.delivery_date instanceof Date
        ? newData.delivery_date
        : service.delivery_date,
  });

  await serviceRepo.save(newService);

  const response: IServiceRequest = serviceSchema.parse(newService);

  return response;
};
