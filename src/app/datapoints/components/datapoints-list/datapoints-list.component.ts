import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datapoints-list',
  templateUrl: './datapoints-list.component.html',
  styleUrls: ['./datapoints-list.component.scss']
})
export class DatapointsListComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    console.log(this.route.snapshot);
  }
}
