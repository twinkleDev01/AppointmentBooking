import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientSignupRoutingModule } from './patient-signup-routing.module';
import { PatientSignupComponent } from './patient-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientSignupComponent
  ],
  imports: [
    CommonModule,
    PatientSignupRoutingModule,
    SharedModule
  ]
})
export class PatientSignupModule { }
