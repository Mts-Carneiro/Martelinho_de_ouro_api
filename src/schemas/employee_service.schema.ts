import { z } from "zod";
import { serviceSchema } from "./service.schema";
import { employeeSchema } from "./employee.schema";

const employeeServiceSchema = z.object({
  value: z.number(),
  service_type: z.string(),
  service: z.any(),
  employee: z.any(),
});

const employeeServiceResponseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  value: z.number(),
  service_type: z.string(),
  service: z.any(),
  employee: z.any(),
});

const listEmployeeServiceSchema = employeeServiceResponseSchema.array();

const employeeServiceUpdateSchema = employeeServiceSchema.partial();

export {
  employeeServiceSchema,
  employeeServiceResponseSchema,
  employeeServiceUpdateSchema,
  listEmployeeServiceSchema,
};
