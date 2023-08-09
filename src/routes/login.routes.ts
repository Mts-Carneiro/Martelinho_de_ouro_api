import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { ensureEmailExists } from "../middleware/userEmailExist.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import { loginSchema } from "../schemas/user.schema";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchema),
  ensureEmailExists,
  loginController
);

export default loginRoutes;
