import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSuccessComponent } from './booking-success.component';

const routes: Routes = [{ path: '', component: BookingSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingSuccessRoutingModule { }
