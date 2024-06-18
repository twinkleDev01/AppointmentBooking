import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home9Component } from './home9.component';

const routes: Routes = [{ path: '', component: Home9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home9RoutingModule { }
