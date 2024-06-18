import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPhoneOtpRoutingModule } from './login-phone-otp-routing.module';
import { LoginPhoneOtpComponent } from './login-phone-otp.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';


@NgModule({
  declarations: [
    LoginPhoneOtpComponent
  ],
  imports: [
    CommonModule,
    LoginPhoneOtpRoutingModule,
    NgxMatIntlTelInputComponent
  ]
})
export class LoginPhoneOtpModule { }
