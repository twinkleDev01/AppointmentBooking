import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Booking2RoutingModule } from './booking2-routing.module';
import { Booking2Component } from './booking2.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Booking2Component
  ],
  imports: [
    CommonModule,
    Booking2RoutingModule,
    SharedModule
  ]
})
export class Booking2Module { }
