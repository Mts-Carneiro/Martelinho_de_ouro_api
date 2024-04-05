import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listServicesSchema,
  serviceResponseSchema,
  serviceSchema,
  servicePatchSchema,
} from "../schemas/service.schema";

type IServiceRequest = z.infer<typeof serviceSchema>;
type IServicePatchRequest = z.infer<typeof servicePatchSchema>;
type IService = z.infer<typeof serviceResponseSchema>;
type IServices = z.infer<typeof listServicesSchema>;
type IServiceUpdate = DeepPartial<IServicePatchRequest>;

export { IService, IServiceRequest, IServiceUpdate, IServices };
