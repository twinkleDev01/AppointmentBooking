import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormVerticalRoutingModule } from './form-vertical-routing.module';
import { FormVerticalComponent } from './form-vertical.component';


@NgModule({
  declarations: [
    FormVerticalComponent
  ],
  imports: [
    CommonModule,
    FormVerticalRoutingModule
  ]
})
export class FormVerticalModule { }
