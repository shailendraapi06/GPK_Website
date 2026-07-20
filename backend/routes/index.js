import { Router } from "express";
import { healthRouter } from "./v1/healthRoutes.js";

const apiV1Router = Router();

apiV1Router.use("/health", healthRouter);

export { apiV1Router };
