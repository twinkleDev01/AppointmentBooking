import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutstockRoutingModule } from './outstock-routing.module';
import { OutstockComponent } from './outstock.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OutstockComponent
  ],
  imports: [
    CommonModule,
    OutstockRoutingModule,
    SharedModule
  ]
})
export class OutstockModule { }
