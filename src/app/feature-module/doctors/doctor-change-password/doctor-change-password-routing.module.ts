import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorChangePasswordComponent } from './doctor-change-password.component';

const routes: Routes = [{ path: '', component: DoctorChangePasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorChangePasswordRoutingModule { }
