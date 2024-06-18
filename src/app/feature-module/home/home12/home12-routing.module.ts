import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home12Component } from './home12.component';

const routes: Routes = [{ path: '', component: Home12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home12RoutingModule { }
