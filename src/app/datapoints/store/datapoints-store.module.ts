import { NgModule } from '@angular/core';
import { DatapointsActions } from './actions';
import { DatapointsEpics } from './epics';

@NgModule({
  providers: [
    DatapointsActions,
    DatapointsEpics
  ]
})
export class DatapointsStoreModule {
}
