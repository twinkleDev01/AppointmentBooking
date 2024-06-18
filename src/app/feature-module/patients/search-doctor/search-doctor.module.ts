import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorRoutingModule } from './search-doctor-routing.module';
import { SearchDoctorComponent } from './search-doctor.component';


@NgModule({
  declarations: [
    SearchDoctorComponent
  ],
  imports: [
    CommonModule,
    SearchDoctorRoutingModule
  ]
})
export class SearchDoctorModule { }
