import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRegisterStep1RoutingModule } from './patient-register-step1-routing.module';
import { PatientRegisterStep1Component } from './patient-register-step1.component';


@NgModule({
  declarations: [
    PatientRegisterStep1Component
  ],
  imports: [
    CommonModule,
    PatientRegisterStep1RoutingModule
  ]
})
export class PatientRegisterStep1Module { }
