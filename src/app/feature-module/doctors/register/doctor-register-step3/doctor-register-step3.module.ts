import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterStep3RoutingModule } from './doctor-register-step3-routing.module';
import { DoctorRegisterStep3Component } from './doctor-register-step3.component';


@NgModule({
  declarations: [
    DoctorRegisterStep3Component
  ],
  imports: [
    CommonModule,
    DoctorRegisterStep3RoutingModule
  ]
})
export class DoctorRegisterStep3Module { }
