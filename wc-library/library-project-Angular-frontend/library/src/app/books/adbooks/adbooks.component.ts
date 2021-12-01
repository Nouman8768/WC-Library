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
    coverimage: new FormControl(''),
  });
  results?: Book[];
  model: any;
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {}
  addbooks() {
    this.model = this.apiService
      .addbooks(this.AddbookForm.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
  uploadimage() {
    if (this.AddbookForm.value.coverimage != null)
      this.apiService.uploadbookimage(this.AddbookForm.value.coverimage);
  }
}
