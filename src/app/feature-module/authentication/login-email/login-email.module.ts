import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginEmailRoutingModule } from './login-email-routing.module';
import { LoginEmailComponent } from './login-email.component';


@NgModule({
  declarations: [
    LoginEmailComponent
  ],
  imports: [
    CommonModule,
    LoginEmailRoutingModule
  ]
})
export class LoginEmailModule { }
