import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSearchGridComponent } from './doctor-search-grid.component';

const routes: Routes = [{ path: '', component: DoctorSearchGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorSearchGridRoutingModule { }
