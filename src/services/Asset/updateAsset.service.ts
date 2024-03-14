import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import { cashOperationResponseSchema } from "../../schemas/cash_operation.schema";
import { DeepPartial } from "typeorm";
import { parseISO } from "date-fns";

export const updateAssetService = async (id: string, data: any) => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const asset = await assetRepo.findOneBy({
    id: id,
  });

  const newData = {
    ...data,
    date: data.date ? parseISO(data.date) : undefined,
  };

  const newAsset = assetRepo.create({
    ...asset,
    ...newData,
    date: newData.date instanceof Date ? newData.date : asset?.date,
  });

  await assetRepo.save(newAsset);

  const response = cashOperationResponseSchema.parse(newAsset);

  return response;
};
