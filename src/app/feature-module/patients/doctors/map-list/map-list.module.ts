import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapListRoutingModule } from './map-list-routing.module';
import { MapListComponent } from './map-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
 


@NgModule({
  declarations: [
    MapListComponent
  ],
  imports: [
    CommonModule,
    MapListRoutingModule,
    SharedModule,
    GoogleMapsModule,
     
  ]
})
export class MapListModule { }
