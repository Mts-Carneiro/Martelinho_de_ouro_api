import AppDataSource from "../../data-source";
import Part from "../../entities/parts.entity";
import { AppError } from "../../errors/AppError";

export const deletePartService = async (id: string) => {
  const partRepo = AppDataSource.getRepository(Part);

  const part = await partRepo.findOneBy({
    id: id,
  });

  if (!part) {
    throw new AppError("part not exist", 409);
  }

  await partRepo.remove(part);
};
