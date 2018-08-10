import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datapoints-detail',
  templateUrl: './datapoints-detail.component.html',
  styleUrls: ['./datapoints-detail.component.scss']
})
export class DatapointsDetailComponent implements OnInit, OnDestroy {

  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(future, current) {
      const currentId: number = parseInt(current.params['id'], 10);
      const futureId: number = parseInt(future.params['id'], 10);
      const idsAreSame = currentId === futureId;
      return idsAreSame;
    };
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
    console.log(`component with id: ${this.id} initialized`);
  }

  ngOnDestroy() {
    console.log(`component with id: ${this.id} destroyed`);
  }

}
