import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterStep1Component } from './doctor-register-step1.component';

const routes: Routes = [{ path: '', component: DoctorRegisterStep1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRegisterStep1RoutingModule { }
