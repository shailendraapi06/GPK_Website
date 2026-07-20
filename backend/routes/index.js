import { Router } from "express";
import { authRouter } from "./v1/authRoutes.js";
import { healthRouter } from "./v1/healthRoutes.js";
import { heroRouter } from "./v1/heroRoutes.js";
import { leadershipRouter } from "./v1/leadershipRoutes.js";
import { notificationRouter } from "./v1/notificationRoutes.js";
import { websiteSettingsRouter } from "./v1/websiteSettingsRoutes.js";
import { apiNotFound } from "../middleware/index.js";

const apiV1Router = Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/health", healthRouter);
apiV1Router.use("/website-settings", websiteSettingsRouter);
apiV1Router.use("/heroes", heroRouter);
apiV1Router.use("/notifications", notificationRouter);
apiV1Router.use("/leadership", leadershipRouter);
apiV1Router.use("*", apiNotFound);

export { apiV1Router };
