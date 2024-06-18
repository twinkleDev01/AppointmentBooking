import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home8Component } from './home8.component';

const routes: Routes = [{ path: '', component: Home8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home8RoutingModule { }
