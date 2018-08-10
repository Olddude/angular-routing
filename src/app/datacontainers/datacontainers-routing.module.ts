import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatacontainersListComponent } from './components/datacontainers-list/datacontainers-list.component';
import { DatacontainersDetailComponent } from './components/datacontainers-detail/datacontainers-detail.component';

const routes: Routes = [
  { path: '', component: DatacontainersListComponent },
  { path: ':id', component: DatacontainersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatacontainersRoutingModule { }
