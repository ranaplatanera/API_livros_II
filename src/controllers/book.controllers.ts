import { Request, Response } from "express";
import { BookService } from "../services/book.service";

export class BookControllers {
    getBooks(req: Request, res: Response) {
        const bookService = new BookService();
        
        const search = req.query.search;
        
        const response = bookService.getBooks(search as string);

        return res.status(200).json(response);
    }

    getOneBook(req: Request, res: Response) {        
        const bookService = new BookService();

        const response = bookService.getOneBook(res.locals.book);

        return res.status(200).json(response);
    }

    create(req: Request, res: Response) {
        const bookService = new BookService();
  
        const response = bookService.create(req.body);
  
        return res.status(201).json(response);
    }

    update(req: Request, res: Response) {
        const bookService = new BookService();

        const response = bookService.update(res.locals.book, req.body);

        return res.status(200).json(response);
    }

    delete(req: Request, res: Response) {
        const bookService = new BookService();

        const id = req.params.id;
        
        const response = bookService.delete(Number(id));
  
        return res.status(204).json(response);
    }
}