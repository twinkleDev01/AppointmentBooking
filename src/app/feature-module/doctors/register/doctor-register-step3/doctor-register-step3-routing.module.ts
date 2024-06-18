import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterStep3Component } from './doctor-register-step3.component';

const routes: Routes = [{ path: '', component: DoctorRegisterStep3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRegisterStep3RoutingModule { }
