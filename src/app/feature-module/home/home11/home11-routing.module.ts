import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home11Component } from './home11.component';

const routes: Routes = [{ path: '', component: Home11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home11RoutingModule { }
