import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRegisterStep3RoutingModule } from './patient-register-step3-routing.module';
import { PatientRegisterStep3Component } from './patient-register-step3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientRegisterStep3Component
  ],
  imports: [
    CommonModule,
    PatientRegisterStep3RoutingModule,
    FormsModule
  ]
})
export class PatientRegisterStep3Module { }
