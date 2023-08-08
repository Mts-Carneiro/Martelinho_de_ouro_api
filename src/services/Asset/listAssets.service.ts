import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const listAllAssetsService = async () => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const assets = assetRepo.find();

  const response = cashOperationResponseSchema.parse(assets);

  return response;
};
