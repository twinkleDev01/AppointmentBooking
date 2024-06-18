import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterStep2Component } from './doctor-register-step2.component';

const routes: Routes = [{ path: '', component: DoctorRegisterStep2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRegisterStep2RoutingModule { }
