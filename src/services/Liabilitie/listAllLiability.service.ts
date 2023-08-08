import AppDataSource from "../../data-source";
import Liabilities from "../../entities/liabilities.entity";
import { AppError } from "../../errors/AppError";
import { ICashOperations } from "../../interfaces/cash_operation.interface";
import { listCashOperations } from "../../schemas/cash_operation.schema";

export const listAllLiabilitiesServices = async (
  userId: string
): Promise<ICashOperations> => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liabilities = liabilityRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!liabilities) {
    throw new AppError("Liabilities not exist", 409);
  }

  const response = listCashOperations.parse(liabilities);

  return response;
};
