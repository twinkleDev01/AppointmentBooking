import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDetailsComponent } from './medical-details.component';

const routes: Routes = [{ path: '', component: MedicalDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalDetailsRoutingModule { }
