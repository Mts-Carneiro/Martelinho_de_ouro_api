import { z } from "zod";

const employeeSchema = z.object({
  name: z.string(),
});

const employeeResponseSchema = employeeSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

const listEmployeesSchema = employeeResponseSchema.array();

const employeeUpdateSchema = employeeSchema.partial();

export {
  employeeResponseSchema,
  employeeSchema,
  listEmployeesSchema,
  employeeUpdateSchema,
};
