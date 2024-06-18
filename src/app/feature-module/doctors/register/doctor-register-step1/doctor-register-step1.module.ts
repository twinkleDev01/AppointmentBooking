import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterStep1RoutingModule } from './doctor-register-step1-routing.module';
import { DoctorRegisterStep1Component } from './doctor-register-step1.component';


@NgModule({
  declarations: [
    DoctorRegisterStep1Component
  ],
  imports: [
    CommonModule,
    DoctorRegisterStep1RoutingModule
  ]
})
export class DoctorRegisterStep1Module { }
