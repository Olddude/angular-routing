import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatacontainersRoutingModule } from './datacontainers-routing.module';
import { DatacontainersListComponent } from './components/datacontainers-list/datacontainers-list.component';
import { DatacontainersDetailComponent } from './components/datacontainers-detail/datacontainers-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DatacontainersRoutingModule
  ],
  declarations: [DatacontainersListComponent, DatacontainersDetailComponent]
})
export class DatacontainersModule { }
