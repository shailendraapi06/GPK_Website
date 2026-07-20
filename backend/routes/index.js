import { Router } from "express";
import { healthRouter } from "./v1/healthRoutes.js";
import { authRouter } from "./v1/authRoutes.js";
import { apiNotFound } from "../middleware/index.js";

const apiV1Router = Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/health", healthRouter);
apiV1Router.use("*", apiNotFound);

export { apiV1Router };
