import { z } from "zod";
import { bookCreateBodySchema, bookSchema, bookUpdateBodySchema } from "../schemas/books.schema";

export type TBook = z.infer<typeof bookSchema>;

export type TBookCreateBody = z.infer<typeof bookCreateBodySchema>;

export type TBookUpdateBody = z.infer<typeof bookUpdateBodySchema>;