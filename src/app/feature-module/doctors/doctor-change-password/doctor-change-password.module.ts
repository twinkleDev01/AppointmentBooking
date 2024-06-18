import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorChangePasswordRoutingModule } from './doctor-change-password-routing.module';
import { DoctorChangePasswordComponent } from './doctor-change-password.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DoctorChangePasswordRoutingModule,
    SharedModule
  ]
})
export class DoctorChangePasswordModule { }
