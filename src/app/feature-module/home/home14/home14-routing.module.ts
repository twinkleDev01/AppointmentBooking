import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home14Component } from './home14.component';

const routes: Routes = [{ path: '', component: Home14Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home14RoutingModule { }
