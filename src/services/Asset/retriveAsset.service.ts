import { assert } from "console";
import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { AppError } from "../../errors/AppError";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const retriveAssetService = async (id: string) => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const asset = assetRepo.findOneBy({
    id: id,
  });

  if (!asset) {
    throw new AppError("Asset not exist", 409);
  }

  const response = cashOperationResponseSchema.parse(assert);

  return response;
};
