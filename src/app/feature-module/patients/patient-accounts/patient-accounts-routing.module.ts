import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAccountsComponent } from './patient-accounts.component';

const routes: Routes = [{ path: '', component: PatientAccountsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientAccountsRoutingModule { }
