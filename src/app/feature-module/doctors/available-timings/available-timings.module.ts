import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableTimingsRoutingModule } from './available-timings-routing.module';
import { AvailableTimingsComponent } from './available-timings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AvailableTimingsComponent
  ],
  imports: [
    CommonModule,
    AvailableTimingsRoutingModule,
    SharedModule
  ]
})
export class AvailableTimingsModule { }
