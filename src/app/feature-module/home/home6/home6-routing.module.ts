import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home6Component } from './home6.component';

const routes: Routes = [{ path: '', component: Home6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home6RoutingModule { }
