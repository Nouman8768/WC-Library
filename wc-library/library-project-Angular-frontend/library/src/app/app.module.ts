import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenresComponent } from './genres/genres.component';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BooksComponent } from './books/books.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { AdbooksComponent } from './books/adbooks/adbooks.component';
import { UpdatebooksComponent } from './books/updatebooks/updatebooks.component';
import { DeletebooksComponent } from './books/deletebooks/deletebooks.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { AddgenresComponent } from './genres/addgenres/addgenres.component';
import { SinlegenrebooksComponent } from './genres/sinlegenrebooks/sinlegenrebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    BooksComponent,
    HomepageComponent,
    AdbooksComponent,
    UpdatebooksComponent,
    DeletebooksComponent,
    FilterPipe,
    AddgenresComponent,
    SinlegenrebooksComponent,
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
