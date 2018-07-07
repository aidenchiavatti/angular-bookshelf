import { TestBed, inject } from '@angular/core/testing';

import { LibraryService } from './library.service';
import { Book } from './book';

function createBookFixture(book_id) {
  return new Book(
    book_id,
    "title",
    "subTitle:",
    ["authors"],
    "publisher",
    "publishDate",
    "description",
    ["categories"],
    "thumbnail",
    "smallThumbnail"
  )
}

describe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.books[0]).toBe(book);
  });

  it('can remove a book to the library', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    libraryService.removeBook(book);
    expect(libraryService.books.length).toBe(0);
  });

  it('can find if a book is in the library', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    expect(libraryService.hasBook(book));
    book = createBookFixture(2);
    expect(libraryService.hasBook(book)).toBe(false);
  });

  it('can save and load the books', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    libraryService.save();
    libraryService.books = [];
    libraryService.load();
    expect(libraryService.books.length).toBe(1);
  });

  it('prevents duplicate book from being added', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    libraryService.addBook(book);
    expect(libraryService.books.length).toBe(1);
  });

  it('does not break on removing book that does not exist', () => {
    let book = createBookFixture(1);
    libraryService.addBook(book);
    book = createBookFixture(2);
    libraryService.removeBook(book);
  });
});