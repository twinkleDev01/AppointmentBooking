import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentRoutingModule } from './dependent-routing.module';
import { DependentComponent } from './dependent.component';


@NgModule({
  declarations: [
    DependentComponent
  ],
  imports: [
    CommonModule,
    DependentRoutingModule
  ]
})
export class DependentModule { }
