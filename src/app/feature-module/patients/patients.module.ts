import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientInvoiceComponent } from './patient-invoice/patient-invoice.component';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientInvoiceComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
