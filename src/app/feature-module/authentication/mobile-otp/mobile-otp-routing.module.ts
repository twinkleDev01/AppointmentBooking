import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileOtpComponent } from './mobile-otp.component';

const routes: Routes = [{ path: '', component: MobileOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileOtpRoutingModule { }
