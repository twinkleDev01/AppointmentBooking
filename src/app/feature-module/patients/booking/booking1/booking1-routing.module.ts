import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Booking1Component } from './booking1.component';

const routes: Routes = [{ path: '', component: Booking1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Booking1RoutingModule { }
