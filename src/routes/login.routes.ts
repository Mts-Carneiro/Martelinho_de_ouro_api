import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { ensureEmailExists } from "../middleware/userEmailExist.middleware";

const loginRoutes = Router();

loginRoutes.post("", ensureEmailExists, loginController);

export default loginRoutes;
