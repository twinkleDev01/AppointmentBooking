import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoiceCallRoutingModule } from './voice-call-routing.module';
import { VoiceCallComponent } from './voice-call.component';
import { materialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    VoiceCallComponent
  ],
  imports: [
    CommonModule,
    VoiceCallRoutingModule,
    materialModule
  ]
})
export class VoiceCallModule { }
