import { TBook } from "../interfaces/book.interface"; 

export let id = 0;

export const booksDatabase: TBook[] = [];

export const generateId = () => {
    id++;
    return id;
}