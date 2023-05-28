import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";

export const listAllAssetsService = async () => {
  const assetRepo = AppDataSource.getRepository(Asset);

  const assets = assetRepo.find();

  return assets;
};
