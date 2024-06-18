import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDoctorRoutingModule } from './chat-doctor-routing.module';
import { ChatDoctorComponent } from './chat-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChatDoctorComponent
  ],
  imports: [
    CommonModule,
    ChatDoctorRoutingModule,
    SharedModule
  ]
})
export class ChatDoctorModule { }
