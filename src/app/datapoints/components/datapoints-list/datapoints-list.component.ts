import { Component, OnInit } from '@angular/core';
import { DatapointsActions } from '../../store/actions';
import { select } from '@angular-redux/store';
import { getHypermedia } from '../../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datapoints-list',
  templateUrl: './datapoints-list.component.html',
  styleUrls: ['./datapoints-list.component.scss']
})
export class DatapointsListComponent {
  @select(getHypermedia)
  datapointsHypermedia$: Observable<any>;

  constructor(private actions: DatapointsActions) {
    this.actions.fetchRootStarted('http://localhost:8080/v1/datapoints');
  }
}
