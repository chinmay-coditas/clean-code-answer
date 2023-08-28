import { IBookDetails } from "./IBookDetails.interface";
import { Book } from "./book";

export class Library extends Book {
  books: IBookDetails[] = [];

  addBook(book: IBookDetails) {
    this.books.push(book);
  }

  getTotalBooksCount() {
    return this.books.length;
  }
}
