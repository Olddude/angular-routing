import { NgModule } from '@angular/core';
import { DatapointsActions } from './actions';
import { DatapointsEpics } from './epics';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [
    DatapointsActions,
    DatapointsEpics
  ]
})
export class DatapointsStoreModule {
}
