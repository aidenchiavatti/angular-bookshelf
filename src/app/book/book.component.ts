import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor(private bookService: GoogleBooksService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.retrieveBook(id)
      .subscribe(book => this.book = book);
  }

}
