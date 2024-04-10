import AppDataSource from "../../data-source";
import Liabilities from "../../entities/liabilities.entity";
import { AppError } from "../../errors/AppError";
import { ICashOperations } from "../../interfaces/cash_operation.interface";
import { listCashOperations } from "../../schemas/cash_operation.schema";

export const listAllLiabilitiesServices = async (
  userId: string
): Promise<ICashOperations> => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liabilitiesList = await liabilityRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  console.log(liabilitiesList)

  if (!liabilitiesList) {
    throw new AppError("Liabilities not exist", 409);
  }

  const response = listCashOperations.parse(liabilitiesList);

  return response;
};
