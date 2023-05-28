import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";

export const createAssetService = async (data: any, id: string) => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const asset = assetRepo.create({
    ...data,
    user: id,
  });

  await assetRepo.save(asset);

  return asset;
};
