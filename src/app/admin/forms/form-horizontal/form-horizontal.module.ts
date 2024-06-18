import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHorizontalRoutingModule } from './form-horizontal-routing.module';
import { FormHorizontalComponent } from './form-horizontal.component';


@NgModule({
  declarations: [
    FormHorizontalComponent
  ],
  imports: [
    CommonModule,
    FormHorizontalRoutingModule
  ]
})
export class FormHorizontalModule { }
