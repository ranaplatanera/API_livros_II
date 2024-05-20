import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";


export class IsBookNameValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const name = req.body.name;

        const filteredbook = booksDatabase.find((book)=> book.name === name);

        if(!filteredbook){
            res.locals.book = filteredbook;

            return next();
        }
       
        throw new AppError("Book already registered.", 409);
    } 
}