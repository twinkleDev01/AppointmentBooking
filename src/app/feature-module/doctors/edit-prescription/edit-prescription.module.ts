import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPrescriptionRoutingModule } from './edit-prescription-routing.module';
import { EditPrescriptionComponent } from './edit-prescription.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditPrescriptionComponent
  ],
  imports: [
    CommonModule,
    EditPrescriptionRoutingModule,
    SharedModule
  ]
})
export class EditPrescriptionModule { }
