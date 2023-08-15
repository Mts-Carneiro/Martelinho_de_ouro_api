import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { listCashOperations } from "../../schemas/cash_operation.schema";

export const listAllAssetsService = async () => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const assets = await assetRepo.find();

  const response = listCashOperations.parse(assets);

  return response;
};
