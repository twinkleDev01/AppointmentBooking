import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { VideoCallComponent } from './video-call.component';
import { materialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    VideoCallComponent
  ],
  imports: [
    CommonModule,
    VideoCallRoutingModule,
    materialModule
  ]
})
export class VideoCallModule { }
