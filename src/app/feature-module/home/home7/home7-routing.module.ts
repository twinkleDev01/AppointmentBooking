import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home7Component } from './home7.component';

const routes: Routes = [{ path: '', component: Home7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home7RoutingModule { }
