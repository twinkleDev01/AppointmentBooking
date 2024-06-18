import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpiredRoutingModule } from './expired-routing.module';
import { ExpiredComponent } from './expired.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ExpiredComponent
  ],
  imports: [
    CommonModule,
    ExpiredRoutingModule,
    SharedModule
  ]
})
export class ExpiredModule { }
