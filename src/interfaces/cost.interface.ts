import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  costResponseSchema,
  costSchema,
  listCostsSchema,
} from "../schemas/cost.schema";

type ICostRequest = z.infer<typeof costSchema>;
type ICost = z.infer<typeof costResponseSchema>;
type ICosts = z.infer<typeof listCostsSchema>;
type ICostUpdate = DeepPartial<ICostRequest>;

export { ICost, ICostRequest, ICostUpdate, ICosts };
