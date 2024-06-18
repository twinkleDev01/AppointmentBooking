import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileOtpRoutingModule } from './mobile-otp-routing.module';
import { MobileOtpComponent } from './mobile-otp.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MobileOtpComponent
  ],
  imports: [
    CommonModule,
    MobileOtpRoutingModule,
    SharedModule
  ]
})
export class MobileOtpModule { }
