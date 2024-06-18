import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search2Component } from './search2.component';

const routes: Routes = [{ path: '', component: Search2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search2RoutingModule { }
