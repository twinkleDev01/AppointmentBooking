import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSuccessRoutingModule } from './booking-success-routing.module';
import { BookingSuccessComponent } from './booking-success.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingSuccessComponent
  ],
  imports: [
    CommonModule,
    BookingSuccessRoutingModule,
    SharedModule
  ]
})
export class BookingSuccessModule { }
