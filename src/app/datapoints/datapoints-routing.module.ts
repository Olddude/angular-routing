import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatapointsListComponent } from './components/datapoints-list/datapoints-list.component';
import { DatapointsDetailComponent } from './components/datapoints-detail/datapoints-detail.component';

const routes: Routes = [
  { path: '', component: DatapointsListComponent },
  { path: ':id', component: DatapointsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatapointsRoutingModule { }
