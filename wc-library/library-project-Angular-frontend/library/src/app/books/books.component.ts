import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from './bookschema';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  BookForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
    coverimage: new FormControl(''),
  });
  results?: Book[] = [];
  searchedText: string = '';
  model: any;
  imageUrl: string = 'http://localhost:4200';

  constructor(
    private readonly apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('images' + this.imageUrl);
    this.model = this.apiService.getallbooks().subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }
  getallbooks() {
    this.model = this.apiService.getallbooks().subscribe((data) => {
      this.results = data;
    });
  }

  deletebooks(book: Book) {
    console.log(book._id!);
    this.apiService.deletebooks(book._id!).subscribe((data) => {
      this.getallbooks();
    });
  }

  bookupdate(result: Book) {
    this.apiService.setter(result);
    this.router.navigate(['/updatebooks']);
  }
  search_books() {
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
