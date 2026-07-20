import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { corsOptions, env } from "./config/index.js";
import { API_MESSAGES, HTTP_STATUS } from "./constants/index.js";
import { errorHandler, notFound } from "./middleware/index.js";
import { apiV1Router } from "./routes/index.js";
import { sendSuccessResponse } from "./utils/index.js";

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.BACKEND_ACTIVE
  });
});

app.use("/api/v1", apiV1Router);

app.use(notFound);
app.use(errorHandler);

export { app };
