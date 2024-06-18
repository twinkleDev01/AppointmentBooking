import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterRoutingModule } from './doctor-register-routing.module';
import { DoctorRegisterComponent } from './doctor-register.component';


@NgModule({
  declarations: [
    DoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    DoctorRegisterRoutingModule
  ]
})
export class DoctorRegisterModule { }
