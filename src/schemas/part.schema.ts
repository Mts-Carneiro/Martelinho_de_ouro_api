import { z } from "zod";
import { serviceResponseSchema } from "./service.schema";

const partSchema = z.object({
  name: z.string(),
  value: z.number(),
  tipe: z.string(),
  service: z.string(),
});

const partResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  tipe: z.string(),
  service: serviceResponseSchema,
});

const partServiceResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  tipe: z.string(),
});

const partUpdateSchema = partSchema.partial();

const listPartsSchema = partResponseSchema.array();

export {
  partResponseSchema,
  partSchema,
  partServiceResponseSchema,
  partUpdateSchema,
  listPartsSchema,
};
