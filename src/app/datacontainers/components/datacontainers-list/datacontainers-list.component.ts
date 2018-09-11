import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableStore, NgRedux } from '@angular-redux/store';
import { DatacontainersActions } from '../../store/actions';
import { DatacontainersState, datacontainersReducer } from '../../store/reducer';
import { getHypermedia } from '../../store/selectors';

@Component({
  selector: 'app-datacontainers-list',
  templateUrl: './datacontainers-list.component.html',
  styleUrls: ['./datacontainers-list.component.scss']
})
export class DatacontainersListComponent {
  datacontainersHypemedia$: Observable<any>;

  private subStore: ObservableStore<DatacontainersState>;

  constructor(private ngRedux: NgRedux<any>, private actions: DatacontainersActions) {
    this.subStore = this.ngRedux.configureSubStore(['datacontainers'], datacontainersReducer);
    this.datacontainersHypemedia$ = this.subStore.select(getHypermedia);
    this.actions.fetchRootStarted('http://localhost:8080/v1/datacontainers');
  }
}
