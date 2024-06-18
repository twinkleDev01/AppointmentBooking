import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRegisterStep4RoutingModule } from './patient-register-step4-routing.module';
import { PatientRegisterStep4Component } from './patient-register-step4.component';


@NgModule({
  declarations: [
    PatientRegisterStep4Component
  ],
  imports: [
    CommonModule,
    PatientRegisterStep4RoutingModule
  ]
})
export class PatientRegisterStep4Module { }
