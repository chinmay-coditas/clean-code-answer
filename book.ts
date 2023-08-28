import { IBookDetails } from "./IBookDetails.interface";

export class Book {
  title: string = "";
  author: string = "";
  publicationYear: string = "";

  public getBookDetails() {
    return {
      title: this.title,
      author: this.author,
      publicationYear: this.publicationYear,
    };
  }

  public updateBookDetails(bookDetails: IBookDetails) {
    this.title = bookDetails.title;
    this.author = bookDetails.author;
    this.publicationYear = bookDetails.publicationYear;
  }
}
