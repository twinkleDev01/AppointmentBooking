import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfile1Component } from './doctor-profile1.component';

const routes: Routes = [{ path: '', component: DoctorProfile1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorProfile1RoutingModule { }
