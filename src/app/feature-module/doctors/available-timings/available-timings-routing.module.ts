import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableTimingsComponent } from './available-timings.component';

const routes: Routes = [{ path: '', component: AvailableTimingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailableTimingsRoutingModule { }
