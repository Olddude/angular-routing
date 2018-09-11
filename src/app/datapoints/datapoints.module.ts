import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatapointsRoutingModule } from './datapoints-routing.module';
import { DatapointsListComponent } from './components/datapoints-list/datapoints-list.component';
import { DatapointsDetailComponent } from './components/datapoints-detail/datapoints-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DatapointsRoutingModule
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
