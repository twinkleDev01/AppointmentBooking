import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailOtpComponent } from './email-otp.component';

const routes: Routes = [{ path: '', component: EmailOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailOtpRoutingModule { }
