import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfile1RoutingModule } from './doctor-profile1-routing.module';
import { DoctorProfile1Component } from './doctor-profile1.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorProfile1Component
  ],
  imports: [
    CommonModule,
    DoctorProfile1RoutingModule,
    SharedModule
    
  ]
})
export class DoctorProfile1Module { }
