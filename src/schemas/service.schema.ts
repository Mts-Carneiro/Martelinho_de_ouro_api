import { z } from "zod";
import { userResponseSchema } from "./user.schema";

const serviceSchema = z.object({
  enterprise: z.enum(["Localiza", "Veneza", "Particular"]),
  vehicle: z.string(),
  license_plate: z
    .string()
    .length(7, "The plate numbering must be seven digits long"),
  description: z.string(),
  phone: z.string(),
  value: z.number(),
  status: z.string(),
  delivery_date: z.date(),
});

const servicePatchSchema = z.object({
  enterprise: z.enum(["Localiza", "Veneza", "Particular"]),
  vehicle: z.string(),
  license_plate: z
    .string()
    .length(7, "The plate numbering must be seven digits long"),
  description: z.string(),
  phone: z.string(),
  value: z.number(),
  status: z.string(),
  delivery_date: z.string(),
});

const serviceResponseSchema = serviceSchema.extend({
  id: z.string(),
  user: userResponseSchema,
});

const listServicesSchema = serviceResponseSchema.array();

const serviceUpdateSchema = servicePatchSchema.partial();

export {
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
  listServicesSchema,
  servicePatchSchema,
};
