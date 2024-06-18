import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleTimingsComponent } from './schedule-timings.component';

const routes: Routes = [{ path: '', component: ScheduleTimingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleTimingsRoutingModule { }
