import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordsComponent } from './medical-records.component';

const routes: Routes = [{ path: '', component: MedicalRecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordsRoutingModule { }
