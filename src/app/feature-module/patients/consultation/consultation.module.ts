import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationRoutingModule } from './consultation-routing.module';
import { ConsultationComponent } from './consultation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    SharedModule
  ]
})
export class ConsultationModule { }
