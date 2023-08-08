import AppDataSource from "../../data-source";
import Liabilities from "../../entities/liabilities.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  ICashOperation,
  ICashOperationRequest,
} from "../../interfaces/cash_operation.interface";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const createLiabilityService = async (
  data: ICashOperationRequest,
  userId: string
): Promise<ICashOperation> => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("This user not exist", 409);
  }

  const liability = liabilityRepo.create({
    ...data,
    user: user,
  });

  await liabilityRepo.save(liability);

  const response = cashOperationResponseSchema.parse(liability);

  return response;
};
