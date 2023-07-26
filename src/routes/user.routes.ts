import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
  userRetriveController,
} from "../controllers/user.controller";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.get("", getUsersController);
userRoutes.post("", createUserController);
userRoutes.get("/:id", userRetriveController);
userRoutes.patch("", ensureAuthMiddleware, updateUserController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
