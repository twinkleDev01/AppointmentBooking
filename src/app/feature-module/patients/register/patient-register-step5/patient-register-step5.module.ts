import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRegisterStep5RoutingModule } from './patient-register-step5-routing.module';
import { PatientRegisterStep5Component } from './patient-register-step5.component';


@NgModule({
  declarations: [
    PatientRegisterStep5Component
  ],
  imports: [
    CommonModule,
    PatientRegisterStep5RoutingModule
  ]
})
export class PatientRegisterStep5Module { }
