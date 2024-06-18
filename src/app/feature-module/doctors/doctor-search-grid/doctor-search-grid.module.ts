import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorSearchGridRoutingModule } from './doctor-search-grid-routing.module';
import { DoctorSearchGridComponent } from './doctor-search-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorSearchGridComponent
  ],
  imports: [
    CommonModule,
    DoctorSearchGridRoutingModule,
    SharedModule,
    
    
  ]
})
export class DoctorSearchGridModule { }
