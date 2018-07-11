import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PagerComponent } from './pager/pager.component';
import { AppRoutingModule } from './/app-routing.module';
import { LibraryComponent } from './library/library.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    HeaderComponent,
    SearchComponent,
    PagerComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
