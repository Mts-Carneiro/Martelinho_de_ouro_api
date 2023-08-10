import { z } from "zod";
import { serviceResponseSchema } from "./service.schema";

const costSchema = z.object({
  name: z.string(),
  value: z.number(),
  service: z.string(),
});

const costResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  service: serviceResponseSchema,
});

const costServiceResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
});

const costUpdateSchema = costSchema.partial();

const listCostsSchema = costResponseSchema.array();

export {
  listCostsSchema,
  costUpdateSchema,
  costResponseSchema,
  costSchema,
  costServiceResponseSchema,
};
