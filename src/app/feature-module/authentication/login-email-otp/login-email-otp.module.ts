import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginEmailOtpRoutingModule } from './login-email-otp-routing.module';
import { LoginEmailOtpComponent } from './login-email-otp.component';


@NgModule({
  declarations: [
    LoginEmailOtpComponent
  ],
  imports: [
    CommonModule,
    LoginEmailOtpRoutingModule
  ]
})
export class LoginEmailOtpModule { }
