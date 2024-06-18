import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Booking1RoutingModule } from './booking1-routing.module';
import { Booking1Component } from './booking1.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Booking1Component
  ],
  imports: [
    CommonModule,
    Booking1RoutingModule,
    SharedModule
  ]
})
export class Booking1Module { }
