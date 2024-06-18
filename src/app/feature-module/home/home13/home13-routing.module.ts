import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home13Component } from './home13.component';

const routes: Routes = [{ path: '', component: Home13Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home13RoutingModule { }
