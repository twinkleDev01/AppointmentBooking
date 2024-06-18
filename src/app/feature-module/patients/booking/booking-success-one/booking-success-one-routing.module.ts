import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSuccessOneComponent } from './booking-success-one.component';

const routes: Routes = [{ path: '', component: BookingSuccessOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingSuccessOneRoutingModule { }
