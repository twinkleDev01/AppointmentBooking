import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmailOtpComponent } from './login-email-otp.component';

const routes: Routes = [{ path: '', component: LoginEmailOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEmailOtpRoutingModule { }
