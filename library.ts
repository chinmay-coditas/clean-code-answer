import { IBookDetails } from "./IBookDetails.interface";
import { Book } from "./book";

export class Library extends Book {
  books: IBookDetails[] = [];

  addBook(book: IBookDetails) {
    this.books.push(book);
  }

  getBookByTitle(title: string) {
    return this.books.find((book) => book.title === title);
  }

  getBookByAuthor(author: string) {
    return this.books.find((book) => book.author === author);
  }

  getTotalBooksCount() {
    return this.books.length;
  }
}
