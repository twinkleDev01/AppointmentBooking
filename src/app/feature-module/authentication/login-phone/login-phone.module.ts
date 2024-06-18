import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPhoneRoutingModule } from './login-phone-routing.module';
import { LoginPhoneComponent } from './login-phone.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';


@NgModule({
  declarations: [
    LoginPhoneComponent
  ],
  imports: [
    CommonModule,
    LoginPhoneRoutingModule,
    SharedModule,
    NgxMatIntlTelInputComponent
  ]
})
export class LoginPhoneModule { }
