import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from '../bookschema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css'],
})
export class UpdatebooksComponent implements OnInit {
  udid = new FormControl('');
  UpdatebookForm = new FormGroup({
    bid: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    genres_name: new FormControl(''),
  });
  results?: Book[];
  //private router: any;
  constructor(
    private readonly apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  private sub: any;
  ngOnInit() {
    // this.sub = this.route.queryParams.subscribe((params) => {
    //   let id = params['_id'];
    //   if (id) {
    //     this.putupdatebooks(id);
    //   }
    // });
  }

  async putupdatebooks() {
    if (this.router.getCurrentNavigation()?.extras.state) {
      let id = this.router.getCurrentNavigation()?.extras.state!['_id'];
      console.log(id);
      this.apiService
        .putupdatebooks(id, this.UpdatebookForm.value)
        .subscribe((data: any) => {
          this.results = data;
          console.log(data);
        });
    }
  }

  // console.log(this.results?.indexOf({ _id: bookid._id }));
}
