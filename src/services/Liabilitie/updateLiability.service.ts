import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Liabilities from "../../entities/liabilities.entity";
import {
  ICashOperation,
  ICashOperationUpdate,
} from "../../interfaces/cash_operation.interface";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";
import { DeepPartial } from "typeorm";
import { parseISO } from "date-fns";

export const updateLiabilityService = async (
  data: any,
  id: string
): Promise<ICashOperation> => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = await liabilityRepo.findOneBy({
    id: id,
  });

  if (!liability) {
    throw new AppError("Liability not exist", 409);
  }

  const newData = {
    ...data,
    date: data.date ? parseISO(data.date) : undefined,
  };

  const newLiability = liabilityRepo.create({
    ...liability,
    ...newData,
    date: newData.date instanceof Date ? newData.date : liability?.date,
  });

  await liabilityRepo.save(newLiability);

  const response = cashOperationResponseSchema.parse(newLiability);

  return response;
};
