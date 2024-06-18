import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSuccessOneRoutingModule } from './booking-success-one-routing.module';
import { BookingSuccessOneComponent } from './booking-success-one.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingSuccessOneComponent
  ],
  imports: [
    CommonModule,
    BookingSuccessOneRoutingModule,
    SharedModule
  ]
})
export class BookingSuccessOneModule { }
