import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailsComponent } from './patient-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    SharedModule
  ]
})
export class PatientDetailsModule { }
