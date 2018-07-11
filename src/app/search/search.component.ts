import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;

  constructor(private bookService: GoogleBooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log('init');
    const query = this.route.snapshot.paramMap.get('query');
    if (query) {
      this.query = query;
      this.search(query);
    }
  }

  search(queryString: string) {
    this.bookService.searchBooks(queryString);
  }

  enterSearch() {
    this.router.navigate(['search', {query: this.query}]);
    this.bookService.page = 0;
    this.search(this.query);
  }

}
