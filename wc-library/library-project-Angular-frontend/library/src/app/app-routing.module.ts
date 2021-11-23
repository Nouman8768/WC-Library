import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdbooksComponent } from './books/adbooks/adbooks.component';
import { BooksComponent } from './books/books.component';
import { DeletebooksComponent } from './books/deletebooks/deletebooks.component';
import { UpdatebooksComponent } from './books/updatebooks/updatebooks.component';
import { AddgenresComponent } from './genres/addgenres/addgenres.component';
import { GenresComponent } from './genres/genres.component';
import { SinlegenrebooksComponent } from './genres/sinlegenrebooks/sinlegenrebooks.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'books', component: BooksComponent },
  { path: 'adbooksroute', component: AdbooksComponent },
  { path: 'updatebooks', component: UpdatebooksComponent },
  { path: 'deletebooks', component: DeletebooksComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'addgenres', component: AddgenresComponent },
  { path: 'singlegenrebooks', component: SinlegenrebooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
