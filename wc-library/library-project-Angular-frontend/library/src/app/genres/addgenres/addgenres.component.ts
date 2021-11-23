import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/books/bookschema';

@Component({
  selector: 'app-addgenres',
  templateUrl: './addgenres.component.html',
  styleUrls: ['./addgenres.component.css'],
})
export class AddgenresComponent implements OnInit {
  AddgenreForm = new FormGroup({
    name: new FormControl(''),
    floor: new FormControl(''),
    dep_number: new FormControl(''),
    shelves: new FormControl(''),
  });
  results?: Book[];
  model: any;
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {}
  addgenres() {
    this.model = this.apiService
      .addgenres(this.AddgenreForm.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
