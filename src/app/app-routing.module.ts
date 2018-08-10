import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'datapoints', loadChildren: './datapoints/datapoints.module#DatapointsModule' },
  { path: 'datacontainers', loadChildren: './datacontainers/datacontainers.module#DatacontainersModule' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
