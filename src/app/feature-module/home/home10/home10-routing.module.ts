import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home10Component } from './home10.component';

const routes: Routes = [{ path: '', component: Home10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home10RoutingModule { }
