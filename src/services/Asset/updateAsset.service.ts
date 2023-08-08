import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";

export const updateAssetService = async (id: string, data: any) => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const asset = await assetRepo.findOneBy({
    id: id,
  });

  const newAsset = assetRepo.create({
    ...asset,
    ...data,
  });

  await assetRepo.save(newAsset);

  const response = cashOperationResponseSchema.parse(newAsset);

  return response;
};
