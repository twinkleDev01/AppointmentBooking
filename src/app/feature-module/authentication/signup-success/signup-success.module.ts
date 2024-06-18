import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupSuccessRoutingModule } from './signup-success-routing.module';
import { SignupSuccessComponent } from './signup-success.component';


@NgModule({
  declarations: [
    SignupSuccessComponent
  ],
  imports: [
    CommonModule,
    SignupSuccessRoutingModule
  ]
})
export class SignupSuccessModule { }
