import { booksDatabase, generateId } from "../database/database";
import { TBook, TBookCreateBody, TBookUpdateBody } from "../interfaces/book.interface";


export class BookService {
    getBooks(search?: string ): TBook[] {
        if (search) {
            const filteredBooks = booksDatabase.filter((book)=>
                book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
            return filteredBooks;
        } else {
            return booksDatabase;
        }
    }

    getOneBook(book: TBook): TBook {
        return book;
    }

    create(body: TBookCreateBody): TBook {
        const now = new Date();

        const newBook: TBook = {
            id: generateId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: now,
            updatedAt: now
        };
    
        booksDatabase.push(newBook);

        return newBook;
    }

    update (currentBook: TBook, body: TBookUpdateBody): TBook {
        const now = new Date();

        const updatedBook = {...currentBook, ...body, updatedAt: now};
        
        const index = booksDatabase.findIndex((book)=>book.id === currentBook.id);

        booksDatabase.splice(index, 1, updatedBook);

        return updatedBook;
    }

    delete (id: number): void {
        const index = booksDatabase.findIndex((book)=>book.id === id);

        booksDatabase.splice(index,1);
    }
}