import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  ICashOperation,
  ICashOperationRequest,
} from "../../interfaces/cash_operation.interface";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const createAssetService = async (
  data: ICashOperationRequest,
  id: string
): Promise<ICashOperation> => {
  const assetRepo = AppDataSource.getRepository(Asset);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError("This user not exist", 409);
  }

  const asset = assetRepo.create({
    ...data,
    user: user,
  });

  await assetRepo.save(asset);

  const response = cashOperationResponseSchema.parse(asset);

  return response;
};
