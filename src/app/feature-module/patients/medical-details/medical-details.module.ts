import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalDetailsRoutingModule } from './medical-details-routing.module';
import { MedicalDetailsComponent } from './medical-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MedicalDetailsComponent
  ],
  imports: [
    CommonModule,
    MedicalDetailsRoutingModule,
    SharedModule
  ]
})
export class MedicalDetailsModule { }
