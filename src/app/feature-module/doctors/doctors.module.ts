import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorSpecialitiesComponent } from './doctor-specialities/doctor-specialities.component';


@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorSpecialitiesComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule
  ]
})
export class DoctorsModule { }
