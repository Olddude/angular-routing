import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datacontainers-detail',
  templateUrl: './datacontainers-detail.component.html',
  styleUrls: ['./datacontainers-detail.component.scss']
})
export class DatacontainersDetailComponent implements OnInit, OnDestroy {

  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
    console.log(`component with id: ${this.id} initialized`);
  }

  ngOnDestroy() {
    console.log(`component with id: ${this.id} destroyed`);
  }

}
