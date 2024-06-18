import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPaymentComponent } from './doctor-payment.component';

const routes: Routes = [{ path: '', component: DoctorPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPaymentRoutingModule { }
