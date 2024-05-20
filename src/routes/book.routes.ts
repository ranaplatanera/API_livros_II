import { Router } from "express";
import { BookControllers } from "../controllers/book.controllers";
import { IsBookIdValid } from "../middleware/IsBookIdValid.middleware";
import { IsBookNameValid } from "../middleware/IsBookNameValid.middleware";
import { BodyValidator } from "../middleware/BodyValidator.middleware";
import { bookCreateBodySchema, bookUpdateBodySchema } from "../schemas/books.schema";

export const bookRoutes = Router();

const bookControllers = new BookControllers();

bookRoutes.get("/", bookControllers.getBooks);

bookRoutes.get("/:id", IsBookIdValid.execute, bookControllers.getOneBook);

bookRoutes.post("/", BodyValidator.execute(bookCreateBodySchema),IsBookNameValid.execute, bookControllers.create);

bookRoutes.patch("/:id", BodyValidator.execute(bookUpdateBodySchema), IsBookNameValid.execute, IsBookIdValid.execute, bookControllers.update);

bookRoutes.delete("/:id", IsBookIdValid.execute, bookControllers.delete);