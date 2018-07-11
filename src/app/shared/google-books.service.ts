import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book';
import { GoogleResponse } from './googleResponse';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  private query = '';
  public _page = 0;
  public initialized = false;
  public loading = false;
  public totalItems = 0;

  books: Book[] = [];

  constructor(private http: HttpClient) { }

  get page(): number {
    return this._page;
  }

  set page(val: number) {
    if (this._page !== val) {
      this._page = val;
      this.searchBooks(this.query);
    }
  }

  get startIndex() {
    return this.page * 10;
  }

  searchBooks(queryString: string) {
    this.query = queryString;
    this.initialized = true;
    this.loading = true;
    this.books = [];
    this.http.get<GoogleResponse>(this.API_PATH + '?q=' + queryString + '&maxResults=10&startIndex=' + this.startIndex) // TODO: change url
      .subscribe(res => { res.items.forEach(book => {
                          if (book.volumeInfo.imageLinks) {
                            this.books.push(this.bookFactory(book));
                          }
                        });
                        this.loading = false;
                        this.totalItems = res.totalItems; });
  }

  retrieveBook(id: string): Observable<Book> {
    return this.http.get(this.API_PATH + '/' + id).pipe(map(res => this.bookFactory(res)));
  }

  private bookFactory(item: any): Book {
    return new Book(
      item.id,
      item.volumeInfo.title,
      item.volumeInfo.subtitle,
      item.volumeInfo.authors,
      item.volumeInfo.publisher,
      item.volumeInfo.publishedDate,
      item.volumeInfo.description,
      item.volumeInfo.categories ? item.volumeInfo.categories.map((i) => i.split('/').pop().trim()) : ['N/A'],
      item.volumeInfo.imageLinks.thumbnail,
      item.volumeInfo.imageLinks.smallThumbnail
    );
  }
}
