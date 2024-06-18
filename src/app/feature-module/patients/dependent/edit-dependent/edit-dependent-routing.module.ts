import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDependentComponent } from './edit-dependent.component';

const routes: Routes = [{ path: '', component: EditDependentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDependentRoutingModule { }
