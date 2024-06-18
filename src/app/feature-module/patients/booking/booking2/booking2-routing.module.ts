import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Booking2Component } from './booking2.component';

const routes: Routes = [{ path: '', component: Booking2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Booking2RoutingModule { }
