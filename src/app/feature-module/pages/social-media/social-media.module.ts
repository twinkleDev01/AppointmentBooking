import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SocialMediaComponent } from './social-media.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  ]
})
export class SocialMediaModule { }
