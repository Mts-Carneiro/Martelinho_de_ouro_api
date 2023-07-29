import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listServicesSchema,
  serviceResponseSchema,
  serviceSchema,
} from "../schemas/service.schema";

type IServiceRequest = z.infer<typeof serviceSchema>;
type IService = z.infer<typeof serviceResponseSchema>;
type IServices = z.infer<typeof listServicesSchema>;
type IServiceUpdate = DeepPartial<IServiceRequest>;

export { IService, IServiceRequest, IServiceUpdate, IServices };
