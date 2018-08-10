import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatapointsModule } from './datapoints/datapoints.module';
import { DatacontainersModule } from './datacontainers/datacontainers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatapointsModule,
    DatacontainersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
