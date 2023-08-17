import { z } from "zod";
import { serviceSchema } from "./service.schema";
import { employeeSchema } from "./employee.schema";

const employeeServiceSchema = z.object({
  value: z.number(),
  service_type: z.string(),
  service: z.string(),
  employee: z.string(),
});

const employeeServiceResponseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  value: z.number(),
  service_type: z.string(),
});

const listEmployeeServiceSchema = employeeServiceSchema.array();

const employeeServiceUpdateSchema = employeeSchema.partial();

export {
  employeeServiceSchema,
  employeeServiceResponseSchema,
  employeeServiceUpdateSchema,
  listEmployeeServiceSchema,
};
