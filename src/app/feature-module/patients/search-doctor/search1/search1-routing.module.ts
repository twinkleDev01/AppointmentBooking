import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search1Component } from './search1.component';

const routes: Routes = [{ path: '', component: Search1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search1RoutingModule { }
