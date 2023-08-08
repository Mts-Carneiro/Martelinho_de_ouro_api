import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Liabilities from "../../entities/liabilities.entity";
import { ICashOperation } from "../../interfaces/cash_operation.interface";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const retriveLiabilityService = async (
  id: string
): Promise<ICashOperation> => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = liabilityRepo.findOneBy({
    id: id,
  });

  if (!liability) {
    throw new AppError("Liability not exist", 409);
  }

  const response = cashOperationResponseSchema.parse(liability);

  return response;
};
