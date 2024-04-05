import "express-async-errors";
import express from "express";
import cors from "cors";
import assetRoutes from "./routes/asset.routes";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import liabilityRoutes from "./routes/liability.routes";
import serviceRoutes from "./routes/service.routes";
import employeesRoutes from "./routes/employer.routes";
import handleError from "./errors/handleError";
import partRoutes from "./routes/cost.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/asset", assetRoutes);
app.use("/part", partRoutes);
app.use("/liability", liabilityRoutes);
app.use("/service", serviceRoutes);
app.use("/employer", employeesRoutes);

app.use(handleError);

export default app;
