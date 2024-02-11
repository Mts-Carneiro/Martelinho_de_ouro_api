import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  resetPasswordController,
  sendResetEmailPasswordController,
  updateUserController,
  userRetriveController,
} from "../controllers/user.controller";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";
import { ensureUserExists } from "../middleware/userDoesntExist.middleware";

const userRoutes = Router();

userRoutes.get("", getUsersController);
userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureUserExists,
  createUserController
);
userRoutes.get("/:id", ensureUUIDIsValid, userRetriveController);
userRoutes.patch(
  "",
  ensureDataIsValidMiddleware(userUpdateSchema),
  ensureAuthMiddleware,
  updateUserController
);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

userRoutes.post("/resetPassword", sendResetEmailPasswordController);

userRoutes.patch("/resetPassword/:token", resetPasswordController);

export default userRoutes;
