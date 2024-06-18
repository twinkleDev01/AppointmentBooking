import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPrescriptionRoutingModule } from './add-prescription-routing.module';
import { AddPrescriptionComponent } from './add-prescription.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPrescriptionComponent
  ],
  imports: [
    CommonModule,
    AddPrescriptionRoutingModule,
    SharedModule
  ]
})
export class AddPrescriptionModule { }
