import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPassword2RoutingModule } from './forgot-password2-routing.module';
import { ForgotPassword2Component } from './forgot-password2.component';


@NgModule({
  declarations: [
    ForgotPassword2Component
  ],
  imports: [
    CommonModule,
    ForgotPassword2RoutingModule
  ]
})
export class ForgotPassword2Module { }
