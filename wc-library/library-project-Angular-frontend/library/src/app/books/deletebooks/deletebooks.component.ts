import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Book } from '../bookschema';

@Component({
  selector: 'app-deletebooks',
  templateUrl: './deletebooks.component.html',
  styleUrls: ['./deletebooks.component.css'],
})
export class DeletebooksComponent implements OnInit {
  // bid = new FormControl('');
  DeletebookForm = new FormGroup({
    bid: new FormControl(''),
  });
  results?: Book[];
  model: any;
  constructor(private readonly apiService: ApiService) {}
  ngOnInit(): void {}
  deletebooks() {
    this.apiService
      .deletebooks(this.DeletebookForm.value.bid)
      .subscribe((data) => {
        console.log(data);
        //this.getallbooks();
      });
  }
}
