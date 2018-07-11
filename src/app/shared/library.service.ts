import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  books: Book[] = [];

  constructor() { }

  addBook(book: Book) {
    //prevent duplicates
    if(!this.hasBook(book)) {
      this.books.push(book);
    }
  }

  hasBook(book: Book): boolean {
    return this.books.indexOf(book) != -1;
  }

  removeBook(book: Book) {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  load() {
    let savedBooks = JSON.parse(localStorage.getItem('books'));
    if(!savedBooks) {
      return;
    }

    this.books = [];
    savedBooks.forEach(book => {
      this.books.push(Object.assign(new Book(null, null, null, null, null, null, null, null, null, null), book))
    });
  }
}
