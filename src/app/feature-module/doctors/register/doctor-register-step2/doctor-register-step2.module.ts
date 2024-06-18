import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterStep2RoutingModule } from './doctor-register-step2-routing.module';
import { DoctorRegisterStep2Component } from './doctor-register-step2.component';


@NgModule({
  declarations: [
    DoctorRegisterStep2Component
  ],
  imports: [
    CommonModule,
    DoctorRegisterStep2RoutingModule
  ]
})
export class DoctorRegisterStep2Module { }
