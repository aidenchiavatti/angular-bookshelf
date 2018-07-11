import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(private bookService: GoogleBooksService) { }

  ngOnInit() {
  }

  nextPage() {
    this.bookService.page++;
  }

  prevPage() {
    this.bookService.page--;
  }

}
