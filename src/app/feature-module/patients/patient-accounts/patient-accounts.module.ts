import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAccountsRoutingModule } from './patient-accounts-routing.module';
import { PatientAccountsComponent } from './patient-accounts.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientAccountsComponent
  ],
  imports: [
    CommonModule,
    PatientAccountsRoutingModule,
    SharedModule
  ]
})
export class PatientAccountsModule { }
