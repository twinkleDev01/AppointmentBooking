import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleTimingsRoutingModule } from './schedule-timings-routing.module';
import { ScheduleTimingsComponent } from './schedule-timings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ScheduleTimingsComponent
  ],
  imports: [
    CommonModule,
    ScheduleTimingsRoutingModule,
    SharedModule
  ]
})
export class ScheduleTimingsModule { }
