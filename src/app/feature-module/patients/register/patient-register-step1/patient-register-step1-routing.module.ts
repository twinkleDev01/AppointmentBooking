import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterStep1Component } from './patient-register-step1.component';

const routes: Routes = [{ path: '', component: PatientRegisterStep1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRegisterStep1RoutingModule { }
