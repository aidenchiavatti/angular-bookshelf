import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full'},
  { path: 'search', component: SearchComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
