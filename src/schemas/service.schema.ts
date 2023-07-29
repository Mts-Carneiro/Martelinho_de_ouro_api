import { object, z } from "zod";
import { userResponseSchema } from "./user.schema";

const serviceSchema = z.object({
  enterprise: z.enum(["Localiza", "Veneza", "Particular"]),
  vehicle: z.string(),
  license_plate: z
    .string()
    .length(7, "The plate numbering must be seven digits long"),
  description: z.string(),
  value: z.number(),
});

const serviceResponseSchema = serviceSchema.extend({
  id: z.string(),
  user: userResponseSchema,
});

const listServicesSchema = serviceResponseSchema.array();

const serviceUpdateSchema = serviceSchema.partial();

export {
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
  listServicesSchema,
};
