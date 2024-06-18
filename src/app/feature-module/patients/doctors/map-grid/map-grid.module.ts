import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapGridRoutingModule } from './map-grid-routing.module';
import { MapGridComponent } from './map-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MapGridComponent
  ],
  imports: [
    CommonModule,
    MapGridRoutingModule,
    SharedModule
  ]
})
export class MapGridModule { }
