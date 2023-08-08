import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  cashOperationResponseSchema,
  cashOperationSchema,
  listCashOperations,
} from "../schemas/cash_operation.schema";

type ICashOperationRequest = z.infer<typeof cashOperationSchema>;
type ICashOperation = z.infer<typeof cashOperationResponseSchema>;
type ICashOperations = z.infer<typeof listCashOperations>;
type ICashOperationUpdate = DeepPartial<ICashOperationRequest>;

export {
  ICashOperation,
  ICashOperationRequest,
  ICashOperationUpdate,
  ICashOperations,
};
