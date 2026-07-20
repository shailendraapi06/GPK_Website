import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { corsOptions } from "./config/corsOptions.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";
import { apiV1Router } from "./routes/index.js";

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.status(200).json({
    success: true,
    message: "Government Polytechnic Kanpur backend foundation is active."
  });
});

app.use("/api/v1", apiV1Router);

app.use(notFound);
app.use(errorHandler);

export { app };
