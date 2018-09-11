import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatapointsRoutingModule } from './datapoints-routing.module';
import { DatapointsListComponent } from './components/datapoints-list/datapoints-list.component';
import { DatapointsDetailComponent } from './components/datapoints-detail/datapoints-detail.component';
import { DatapointsStoreModule } from './store/datapoints-store.module';

@NgModule({
  imports: [
    CommonModule,
    DatapointsRoutingModule,
    DatapointsStoreModule
  ],
  declarations: [
    DatapointsListComponent,
    DatapointsDetailComponent
  ],
  exports: [
    DatapointsListComponent,
    DatapointsDetailComponent
  ]
})
export class DatapointsModule { }
