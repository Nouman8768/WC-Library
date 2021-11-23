import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/books/bookschema';
import { Genres } from '../genres_schema';

@Component({
  selector: 'app-sinlegenrebooks',
  templateUrl: './sinlegenrebooks.component.html',
  styleUrls: ['./sinlegenrebooks.component.css'],
})
export class SinlegenrebooksComponent implements OnInit {
  GenreForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    floor: new FormControl(''),
    genre_number: new FormControl(''),
    shelves: new FormControl(''),
  });
  SingleGenreBookForm = new FormGroup({
    _id: new FormControl(''),
    bid: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
  });
  bookresults?: Book[];

  searchedText: string = '';

  constructor(private readonly apiService: ApiService) {}

  async ngOnInit() {
    const a = this.apiService.genregetter();
    this.GenreForm.setValue({
      _id: a?._id,
      name: a?.name,
      floor: a?.floor,
      genre_number: a?.dep_number,
      shelves: a?.shelves,
    });
    this.get_books_of_single_genre(this.GenreForm.value.name);
  }
  async get_books_of_single_genre(genrename: Genres) {
    (await this.apiService.getallBooksofSingleGenere(genrename)).subscribe(
      (data) => {
        this.bookresults = data;
        console.log(data);
      }
    );
  }
}
