import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordsRoutingModule } from './medical-records-routing.module';
import { MedicalRecordsComponent } from './medical-records.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MedicalRecordsComponent
  ],
  imports: [
    CommonModule,
    MedicalRecordsRoutingModule,
    SharedModule
  ]
})
export class MedicalRecordsModule { }
