import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapoints-list',
  templateUrl: './datapoints-list.component.html',
  styleUrls: ['./datapoints-list.component.scss']
})
export class DatapointsListComponent {
  data = [
    { id: 1, name: 'dp1' },
    { id: 2, name: 'dp2' },
    { id: 3, name: 'dp3' }
  ];
}
