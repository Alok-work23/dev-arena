import cors from "cors";
import express from "express";

import { errorMiddleware } from "./middleware/error.middleware.js";
import { healthRouter } from "./routes/health.routes.js";
import { problemRouter } from "./routes/problem.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/problems", problemRouter);

app.use(errorMiddleware);

export default app;