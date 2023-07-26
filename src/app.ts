import express from "express";
import cors from "cors";
import assetRoutes from "./routes/asset.routes";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import costRoutes from "./routes/cost.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/asset", assetRoutes);
app.use("/cost", costRoutes);

export default app;
