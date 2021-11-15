import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from './bookschema';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  _id = new FormControl('');
  BookForm = new FormGroup({
    bid: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
  });
  results?: Book[];
  model: any;
  constructor(
    private readonly apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.model = this.apiService.getallbooks().subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }
  getallbooks() {
    this.model = this.apiService.getallbooks().subscribe((data) => {
      this.results = data;
      //console.log(this.results);
    });
  }

  async putupdatebooks() {
    this.model = this.apiService
      .putupdatebooks(this._id.value, this.BookForm.value)
      .subscribe((data: any) => {
        this.results = data;
        console.log(data);
      });
    this.router.navigate(['/updatebooks']);
  }

  deletebooks(book: Book) {
    console.log(book._id!);
    this.apiService.deletebooks(book._id!).subscribe((data) => {
      this.getallbooks();
    });
  }

  datapassing() {
    let id = this.BookForm.value._id;
    let navigationExtras: NavigationExtras = {
      state: {
        _id: id,
      },
    };
    this.router.navigate(['/updatebooks'], navigationExtras);
  }

  bookupdate(result: Book) {
    this.apiService.setter(result);
    this.router.navigate(['/updatebooks']);
  }
}
