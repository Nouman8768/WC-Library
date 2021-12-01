import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/api.service';
import { Book } from '../bookschema';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css'],
})
export class UpdatebooksComponent implements OnInit {
  UpdatebookForm = new FormGroup({
    _id: new FormControl(''),
    bid: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
  });
  results?: Book;
  model: any;
  constructor(private readonly apiService: ApiService) {}
  ngOnInit() {
    const a = this.apiService.getter();
    this.UpdatebookForm.setValue({
      _id: a?._id,
      name: a?.name,
      author: a?.author,
      price: a?.price,
      genres_name: a?.genres_name,
    });
  }
  async putupdatebooks() {
    this.apiService
      .putupdatebooks(this.UpdatebookForm.value._id, this.UpdatebookForm.value)
      .subscribe((data: Book) => {
        this.results = data;
        console.log(data);
      });
  }
}
