import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorListRoutingModule } from './doctor-list-routing.module';
import { DoctorListComponent } from './doctor-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorListComponent
  ],
  imports: [
    CommonModule,
    DoctorListRoutingModule,
    SharedModule
  ]
})
export class DoctorListModule { }
