import { z } from "zod";

const cashOperationSchema = z.object({
  tipe: z.string(),
  name: z.string(),
  description: z.string(),
  value: z.number(),
});

const cashOperationResponseSchema = cashOperationSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});

const cashOperationUpdateSchema = cashOperationSchema.partial();

const listCashOperations = cashOperationResponseSchema.array();

export {
  cashOperationResponseSchema,
  cashOperationSchema,
  cashOperationUpdateSchema,
  listCashOperations,
};
