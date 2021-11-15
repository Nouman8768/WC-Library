import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Book } from '../bookschema';

@Component({
  selector: 'app-adbooks',
  templateUrl: './adbooks.component.html',
  styleUrls: ['./adbooks.component.css'],
})
export class AdbooksComponent implements OnInit {
  AddbookForm = new FormGroup({
    bid: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
  });
  results?: Book[];
  model: any;
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {}
  getallbooks() {
    this.model = this.apiService.getallbooks().subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }
  addbooks() {
    this.model = this.apiService
      .addbooks(this.AddbookForm.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
