import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { listCashOperations } from "../../schemas/cash_operation.schema";

export const listAllAssetsService = async (userId: string) => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const assets = await assetRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  const response = listCashOperations.parse(assets);

  return response;
};
