import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorPaymentRoutingModule } from './doctor-payment-routing.module';
import { DoctorPaymentComponent } from './doctor-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorPaymentComponent
  ],
  imports: [
    CommonModule,
    DoctorPaymentRoutingModule,
    SharedModule
  ]
})
export class DoctorPaymentModule { }
