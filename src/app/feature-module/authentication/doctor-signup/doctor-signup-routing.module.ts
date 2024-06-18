import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSignupComponent } from './doctor-signup.component';

const routes: Routes = [{ path: '', component: DoctorSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorSignupRoutingModule { }
