import { NgModule } from '@angular/core';
import { DatacontainersActions } from './actions';
import { DatacontainersEpics } from './epics';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [
    DatacontainersActions,
    DatacontainersEpics
  ]
})
export class DatacontainersStoreModule {
}
