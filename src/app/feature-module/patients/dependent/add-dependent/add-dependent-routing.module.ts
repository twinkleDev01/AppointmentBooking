import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDependentComponent } from './add-dependent.component';

const routes: Routes = [{ path: '', component: AddDependentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDependentRoutingModule { }
