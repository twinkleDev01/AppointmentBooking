import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientListRoutingModule } from './patient-list-routing.module';
import { PatientListComponent } from './patient-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientListRoutingModule,
    SharedModule
  ]
})
export class PatientListModule { }
