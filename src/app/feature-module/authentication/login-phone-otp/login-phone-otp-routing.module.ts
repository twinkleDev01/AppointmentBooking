import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPhoneOtpComponent } from './login-phone-otp.component';

const routes: Routes = [{ path: '', component: LoginPhoneOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPhoneOtpRoutingModule { }
