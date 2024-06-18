import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailOtpRoutingModule } from './email-otp-routing.module';
import { EmailOtpComponent } from './email-otp.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    EmailOtpComponent
  ],
  imports: [
    CommonModule,
    EmailOtpRoutingModule,
    SharedModule
  ]
})
export class EmailOtpModule { }
