import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSignupComponent } from './patient-signup.component';

const routes: Routes = [{ path: '', component: PatientSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientSignupRoutingModule { }
