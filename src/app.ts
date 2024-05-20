import "express-async-errors";
import express, { json } from "express";
import { bookRoutes } from "./routes/book.routes";
import { HandleErrors } from "./errors/HandleErrors";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", bookRoutes);

app.use(HandleErrors.execute);