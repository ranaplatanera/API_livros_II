import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsBookIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const book = booksDatabase.find(book => book.id === Number (id));

        if(!book){
            throw new AppError("Book not found.", 404)
        }

        res.locals.book = book;

        return next();
    } 
}