import { z } from "zod";

const costSchema = z.object({
  name: z.string(),
  const: z.number(),
  service: z.string(),
});

const costResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  const: z.number(),
  service: z.string(),
});

const costUpdateSchema = costSchema.partial();

const listCostsSchema = costResponseSchema.array();

export { listCostsSchema, costUpdateSchema, costResponseSchema, costSchema };
