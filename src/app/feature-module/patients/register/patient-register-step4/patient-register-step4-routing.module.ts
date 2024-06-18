import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterStep4Component } from './patient-register-step4.component';

const routes: Routes = [{ path: '', component: PatientRegisterStep4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRegisterStep4RoutingModule { }
