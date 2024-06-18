import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfile2Component } from './doctor-profile2.component';

const routes: Routes = [{ path: '', component: DoctorProfile2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorProfile2RoutingModule { }
