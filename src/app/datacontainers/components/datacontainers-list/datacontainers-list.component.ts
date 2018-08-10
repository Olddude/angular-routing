import { Component } from '@angular/core';

@Component({
  selector: 'app-datacontainers-list',
  templateUrl: './datacontainers-list.component.html',
  styleUrls: ['./datacontainers-list.component.scss']
})
export class DatacontainersListComponent {
  data = [
    { id: 1, name: 'dc1' },
    { id: 2, name: 'dc2' },
    { id: 3, name: 'dc3' }
  ];
}
