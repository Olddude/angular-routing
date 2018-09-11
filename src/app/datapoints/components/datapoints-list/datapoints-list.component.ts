import { Component, OnInit } from '@angular/core';
import { DatapointsActions } from '../../store/actions';
import { NgRedux, ObservableStore } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { DatapointsState, datapointsReducer } from '../../store/reducer';
import { getHypermedia } from '../../store/selectors';

@Component({
  selector: 'app-datapoints-list',
  templateUrl: './datapoints-list.component.html',
  styleUrls: ['./datapoints-list.component.scss']
})
export class DatapointsListComponent {
  datapointsHypermedia$: Observable<any>;

  private subStore: ObservableStore<DatapointsState>;

  constructor(private ngRedux: NgRedux<any>, private actions: DatapointsActions) {
    this.subStore = this.ngRedux.configureSubStore(['datapoints'], datapointsReducer);
    this.datapointsHypermedia$ = this.subStore.select(getHypermedia);
    this.actions.fetchRootStarted('http://localhost:8080/v1/datapoints');
  }
}
