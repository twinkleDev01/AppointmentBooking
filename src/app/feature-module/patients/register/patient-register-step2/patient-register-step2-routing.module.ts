import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterStep2Component } from './patient-register-step2.component';

const routes: Routes = [{ path: '', component: PatientRegisterStep2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRegisterStep2RoutingModule { }
