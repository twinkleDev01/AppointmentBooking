import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependentListComponent } from './dependent-list.component';

const routes: Routes = [{ path: '', component: DependentListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependentListRoutingModule { }
