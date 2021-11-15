import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Genres } from './genres_schema';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  id = new FormControl('');
  GenreForm = new FormGroup({
    name: new FormControl(''),
    floor: new FormControl(''),
    genre_number: new FormControl(''),
    shelves: new FormControl(''),
  });
  results?: Genres[];
  model: any;
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {}
  getallgenres() {
    this.model = this.apiService.getallgenres().subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }
  addgenres() {
    this.apiService.addgenres(this.GenreForm.value).subscribe((result) => {
      console.log(result);
    });
  }

  async putupdateGenres() {
    this.apiService
      .putupdategenre(this.GenreForm.value)
      .subscribe((result: any) => {
        console.log(result);
      });
  }
  async patchupdateGenres() {
    this.apiService
      .patchupdategenres(this.id.value, this.GenreForm.value)
      .subscribe((result: any) => {
        console.log(result);
      });
  }
  deletegenres() {
    this.apiService.deletegenres(this.id.value).subscribe((result) => {
      console.log(result);
    });
  }
}
