import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Book } from '../books/bookschema';
import { Genres } from './genres_schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  GenreForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    floor: new FormControl(''),
    genre_number: new FormControl(''),
    shelves: new FormControl(''),
  });
  results?: Genres[];
  bookresults?: Book[];
  model: any;
  searchedText: string = '';
  constructor(
    private readonly apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
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
  send_genre_data(result: Genres) {
    this.apiService.genresetter(result);
    console.log(result);
    this.router.navigate(['/singlegenrebooks']);
  }
  // async patchupdateGenres() {
  //   this.apiService
  //     .patchupdategenres(this.id.value, this.GenreForm.value)
  //     .subscribe((result: any) => {
  //       console.log(result);
  //     });
  // }
  // deletegenres() {
  //   this.apiService.deletegenres(this.id.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }
  search_genres() {
    if (this.searchedText != '') {
      this.results = this.results?.filter((res) => {
        return res.name
          ?.toLocaleLowerCase()
          .match(this.searchedText.toLocaleLowerCase());
      });
    } else if (this.searchedText == '') {
      this.ngOnInit();
    }
  }
}
