import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterStep5Component } from './patient-register-step5.component';

const routes: Routes = [{ path: '', component: PatientRegisterStep5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRegisterStep5RoutingModule { }
