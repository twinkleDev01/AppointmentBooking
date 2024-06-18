import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterComponent } from './doctor-register.component';

const routes: Routes = [{ path: '', component: DoctorRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRegisterRoutingModule {}
